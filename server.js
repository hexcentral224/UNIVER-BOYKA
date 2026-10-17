// UNIVER BOYKA — serveur web + bots WhatsApp (basé sur CENTRAL-HEX)
const path = require('path');
const express = require('express');
const axios = require('axios');
const cfg = require('./core/config');
const db = require('./core/db');
const sessions = require('./core/sessions');
const handler = require('./core/handler');
require('./commands');
const registry = require('./core/registry');

// 24/7 : une erreur isolée ne doit jamais faire tomber le serveur
process.on('uncaughtException', e => console.error('uncaughtException:', e?.message || e));
process.on('unhandledRejection', e => console.error('unhandledRejection:', e?.message || e));

sessions.setHandlers({ onMessage: handler.handle, onGroup: handler.onGroup, onCall: handler.onCall });

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '100kb' }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});

// ── Limitation de débit simple (par IP) ──
const hits = new Map();
function limit(max, windowMs) {
  return (req, res, next) => {
    const k = req.ip + req.path;
    const now = Date.now();
    const arr = (hits.get(k) || []).filter(t => now - t < windowMs);
    if (arr.length >= max) return res.status(429).json({ error: 'Trop de tentatives, patiente un instant.' });
    arr.push(now);
    hits.set(k, arr);
    next();
  };
}
setInterval(() => hits.clear(), 10 * 60 * 1000).unref();

const PUB = path.join(__dirname, 'public');
app.get('/', (_, res) => res.sendFile(path.join(PUB, 'index.html')));
app.use('/assets', express.static(path.join(PUB, 'assets'), { maxAge: '1d' }));
app.get('/health', (_, res) => res.json({ ok: true, uptime: process.uptime() }));

// ── API publique ──
app.get('/api/stats', (_, res) => {
  const g = db.global().data;
  res.json({ online: sessions.openCount(), total: sessions.count(), capacity: cfg.MAX_SESSIONS, commands: registry.total(), messages: g.messages, uptime: process.uptime() });
});

app.post('/api/pair', limit(6, 60_000), async (req, res) => {
  try {
    const code = await sessions.startPair(req.body?.number);
    res.json({ code, number: sessions.clean(req.body.number) });
  } catch (e) { res.status(400).json({ error: e.message }); }
});
app.get('/api/pair/status', (req, res) => res.json(sessions.pairState(req.query.number)));

app.post('/api/qr', limit(6, 60_000), async (_, res) => {
  try { res.json({ id: await sessions.startQR() }); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.get('/api/qr/:id', async (req, res) => {
  try { res.json(await sessions.qrState(req.params.id)); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

// ── Démarrage ──
app.listen(cfg.PORT, '0.0.0.0', async () => {
  console.log(`🚀 ${cfg.BOT_NAME} v${cfg.VERSION} — http://localhost:${cfg.PORT}  (${registry.total()} commandes)`);
  await sessions.restoreAll();
});

// Keep-alive : évite la mise en veille des hébergeurs gratuits
const self = process.env.RENDER_EXTERNAL_URL || process.env.KOYEB_PUBLIC_DOMAIN && `https://${process.env.KOYEB_PUBLIC_DOMAIN}` || cfg.PUBLIC_URL;
if (self) setInterval(() => axios.get(self + '/health', { timeout: 15000 }).catch(() => {}), 4 * 60 * 1000).unref();
