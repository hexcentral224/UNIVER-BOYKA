// Habillage UNIVER BOYKA : tous les messages à titre en MAJUSCULES deviennent des « cartes » avec signature
const cfg = require('./config');
const BAR = '━'.repeat(17);

function skin(text) {
  if (typeof text !== 'string') return text;
  let framed = false;
  const m = text.match(/^(\S+)\s+\*([^*\n]+)\*(?=\n|$)/u);
  if (m && m[2] === m[2].toUpperCase() && /\p{L}{3}/u.test(m[2])) {
    text = `◤${BAR}◥\n  ${m[1]} *${m[2]}*\n◣${BAR}◢` + text.slice(m[0].length);
    framed = true;
  }
  text = text.replace(/^(\s*)(▫️|•|◈)\s/gmu, (x, sp, b) => sp + (b === '◈' ? '▸ ' : '❯ '));
  if (framed && !text.includes(cfg.BRAND)) text += `\n\n> ${cfg.BRAND} 🇬🇳`;
  return text;
}
module.exports = { skin };
