// Menu UNIVER BOYKA — design propre au bot (basé sur CENTRAL-HEX)
const cfg = require('./config');
const registry = require('./registry');

// [emoji, titre, [noms de commandes]]
const SECTIONS = [
  ['🌐', '𝗚𝗘́𝗡𝗘́𝗥𝗔𝗟', ['menu', 'help', 'test', 'info', 'owner', 'script']],
  ['🏰', '𝗚𝗥𝗢𝗨𝗣𝗘', ['open', 'close', 'kick', 'kickall', 'purge', 'promote', 'demote', 'link', 'approve', 'totalmembres', 'clan', 'gstatuts']],
  ['⚖️', '𝗠𝗢𝗗𝗘́𝗥𝗔𝗧𝗜𝗢𝗡', ['warn', 'sanction', 'mute', 'unmute', 'ban']],
  ['📣', '𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗦', ['tagall', 'tag', 'hidetag']],
  ['🛡️', '𝗣𝗥𝗢𝗧𝗘𝗖𝗧𝗜𝗢𝗡𝗦', ['antilink', 'antibadword', 'antibot', 'antimention', 'antistiker', 'antitag', 'antidelete', 'anticall']],
  ['🎨', '𝗠𝗘́𝗗𝗜𝗔𝗦', ['stiker', 'take', 'setpp', 'humm', 'ss']],
  ['⚙️', '𝗥𝗘́𝗚𝗟𝗔𝗚𝗘𝗦', ['mode', 'prompt', 'setting']]
];

const fmtUptime = sec => {
  sec = Math.floor(sec);
  const d = Math.floor(sec / 86400), h = Math.floor(sec % 86400 / 3600), m = Math.floor(sec % 3600 / 60);
  return `${d ? d + 'j ' : ''}${h}h ${m}min`;
};
const now = () => new Date().toLocaleString('fr-FR', { timeZone: cfg.TZ, weekday: 'long', day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' });
const greet = () => {
  const h = Number(new Date().toLocaleString('fr-FR', { timeZone: cfg.TZ, hour: '2-digit', hour12: false }));
  return h >= 5 && h < 18 ? 'Bonjour' : 'Bonsoir';
};
const online = () => { try { return require('./sessions').openCount(); } catch { return 1; } };

function build(ctx) {
  const p = ctx.p;
  const out = [
    '◤━━━━━━━━━━━━━━━━━━◥',
    '  ⚡ *𝗨𝗡𝗜𝗩𝗘𝗥 𝗕𝗢𝗬𝗞𝗔* ⚡',
    '◣━━━━━━━━━━━━━━━━━━◢',
    `${greet()} *${ctx.pushName}* 👋`,
    '',
    '┏━ *𝗜𝗡𝗙𝗢𝗦*',
    `┃ 👑 Owner ▸ *${cfg.OWNER.name}*`,
    `┃ 🔰 Préfixe ▸ *[ ${p} ]*`,
    `┃ 📡 Mode ▸ *${ctx.store.data.mode === 'private' ? 'privé' : 'public'}*`,
    `┃ 📚 Commandes ▸ *${registry.total()}*`,
    `┃ 🌍 Bots connectés ▸ *${online()}*`,
    `┃ ⏳ Activité ▸ *${fmtUptime(process.uptime())}*`,
    `┃ 🕒 ${now()}`,
    '┗━━━━━━━━━━━━━━━━━',
    ''
  ];
  // Une commande par ligne, chaque catégorie dans son cadre
  for (const [emoji, title, names] of SECTIONS) {
    out.push('┌─────────────────', `│ ${emoji} *${title}*`, '├─────────────────');
    names.forEach(n => out.push(`│ ❯ ${p}${n}`));
    out.push('└─────────────────', '');
  }
  out.push(`💡 _Écris_ *help <commande>* _pour le détail_`, '', `> ${cfg.BRAND} 🇬🇳`);
  return out.join('\n');
}

module.exports = { build, SECTIONS, fmtUptime };
