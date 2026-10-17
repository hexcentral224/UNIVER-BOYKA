const os = require('os');
const { add } = require('../core/registry');
const cfg = require('../core/config');
const protection = require('../core/protection');
const registry = require('../core/registry');
const { fmtUptime } = require('../core/menu');
const sessions = require('../core/sessions');

const on = v => (v ? '🟢 ON' : '🔴 OFF');
const sig = `\n\n> ${cfg.BRAND} 🇬🇳`;

add({ name: 'test', cat: 'general', desc: 'tester que le bot répond', use: 'test', async run(ctx) {
  await ctx.reply(`✅ *${cfg.BOT_NAME}* est en ligne et fonctionne parfaitement.\n🔰 Préfixe : *[ ${ctx.p} ]*  •  📡 Mode : *${ctx.store.data.mode === 'private' ? 'privé' : 'public'}*`);
} });

add({ name: 'info', cat: 'general', desc: 'informations sur le bot', use: 'info', async run(ctx) {
  const mem = process.memoryUsage().rss / 1048576;
  await ctx.reply(`🤖 *${cfg.BOT_NAME}*\n\n` +
    `👑 Propriétaire : *${cfg.OWNER.name}* (+${cfg.OWNER.number})\n` +
    `🌍 Bots connectés : *${sessions.openCount()}*\n` +
    `🔰 Préfixe : *[ ${ctx.p} ]*\n` +
    `📡 Mode : *${ctx.store.data.mode === 'private' ? 'privé' : 'public'}*\n` +
    `📚 Commandes : *${registry.total()}*\n` +
    `🤖 Version : *${cfg.VERSION}*\n` +
    `⏳ Activité : *${fmtUptime(process.uptime())}*\n` +
    `💾 Mémoire : *${mem.toFixed(0)} Mo*  •  🖥️ Node *${process.version}*\n` +
    `🧱 Basé sur *${cfg.BRAND}*${sig}`);
} });

add({ name: 'owner', cat: 'general', desc: 'contacts du propriétaire et du créateur', use: 'owner', async run(ctx) {
  const card = (name, number) => ({ displayName: name, vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG:${cfg.BOT_NAME};\nTEL;type=CELL;type=VOICE;waid=${number}:+${number}\nEND:VCARD` });
  const list = [card(`${cfg.OWNER.name} (Propriétaire)`, cfg.OWNER.number), card(`${cfg.CREATOR.name} (Créateur)`, cfg.CREATOR.number)];
  for (const c of list) {
    await ctx.send({ contacts: { displayName: c.displayName, contacts: [c] } });
    await new Promise(r => setTimeout(r, 400));
  }
} });

add({ name: 'script', cat: 'general', desc: 'le script du bot', use: 'script', async run(ctx) {
  if (cfg.SCRIPT_URL) return ctx.reply(`📦 *Script de ${cfg.BOT_NAME}*\n\n🔗 ${cfg.SCRIPT_URL}\n\n🧱 Basé sur *${cfg.BRAND}*${sig}`);
  await ctx.reply(`📦 *Script de ${cfg.BOT_NAME}*\n\n🔒 Le script de ce bot est privé.\n🧱 Il est basé sur *${cfg.BRAND}*.\n\n👑 Contact : +${cfg.OWNER.number}${sig}`);
} });

// Réglages : accessibles au propriétaire
add({ name: 'mode', cat: 'settings', desc: 'passer le bot en public ou privé', use: 'mode public | prive', owner: true, async run(ctx) {
  const v = (ctx.args[0] || '').toLowerCase();
  const cur = ctx.store.data.mode === 'private' ? 'privé' : 'public';
  if (!['public', 'private', 'prive', 'privé'].includes(v)) return ctx.reply(`📡 Mode actuel : *${cur}*\n\n*mode public* : tout le monde peut utiliser le bot\n*mode prive* : seul le propriétaire peut l'utiliser`);
  ctx.store.data.mode = v === 'public' ? 'public' : 'private';
  ctx.store.save();
  await ctx.reply(`✅ Mode *${v === 'public' ? 'public' : 'privé'}* activé.`);
} });

add({ name: 'prompt', alias: ['prefix'], cat: 'settings', desc: 'voir ou changer le préfixe du bot', use: 'prompt [nouveau préfixe]', owner: true, async run(ctx) {
  const v = ctx.args[0];
  if (!v) return ctx.reply(`🔰 Préfixe actuel : *[ ${ctx.p} ]*\n\nPour le changer : *prompt !*  (1 à 3 symboles)\nPour revenir au préfixe d'origine : *prompt reset*`);
  if (v.toLowerCase() === 'reset') { ctx.store.data.prefix = null; ctx.store.save(); return ctx.reply(`✅ Préfixe remis à *[ ${cfg.PREFIX} ]*.`); }
  if (v.length > 3 || /[\p{L}\p{N}\s*_~`]/u.test(v)) return ctx.reply('❌ Le préfixe doit faire 1 à 3 symboles (ni lettres, ni chiffres, ni espaces). Exemples : *.*  *!*  *#*  */*');
  ctx.store.data.prefix = v; ctx.store.save();
  await ctx.reply(`✅ Nouveau préfixe : *[ ${v} ]*\nEssaie : *${v}menu*`);
} });

add({ name: 'setting', alias: ['settings'], cat: 'settings', desc: 'voir les réglages du bot et du groupe', use: 'setting', async run(ctx) {
  let t = `⚙️ *RÉGLAGES — ${cfg.BOT_NAME}*\n\n📡 Mode : *${ctx.store.data.mode === 'private' ? 'privé' : 'public'}*\n🔰 Préfixe : *[ ${ctx.p} ]*\n🗑️ Antidelete : ${on(ctx.store.data.antidelete)}\n📵 Anticall : ${ctx.store.data.anticall === 'block' ? '🟢 ON (+ blocage)' : on(ctx.store.data.anticall)}\n`;
  if (ctx.isGroup) {
    const g = protection.groupCfg(ctx.store, ctx.from);
    t += `\n👥 *Ce groupe*\n• antilink : ${on(g.antilink)}\n• antibadword : ${on(g.antibadword)}\n• antibot : ${on(g.antibot)}\n• antimention : ${on(g.antistatus)}\n• antistiker : ${on(g.antisticker)}\n• antitag : ${on(g.antitag)}`;
    t += `\n\n🛡️ Bot admin : ${ctx.isBotAdmin ? 'oui ✅' : 'non ❌ (nécessaire pour les protections)'}`;
  } else t += '\n_Utilise cette commande dans un groupe pour voir ses protections._';
  await ctx.reply(t);
} });
