require('dotenv').config();
module.exports = {
  BOT_NAME: 'UNIVER BOYKA',
  BRAND: 'CENTRAL-HEX',                       // le bot est basé sur CENTRAL-HEX
  VERSION: '1.0.0',
  PREFIX: process.env.PREFIX || '.',
  PORT: Number(process.env.PORT) || 3000,
  // Nombre maximum de numéros connectés en même temps (chaque session consomme de la mémoire)
  MAX_SESSIONS: Number(process.env.MAX_SESSIONS) || 25,
  PUBLIC_URL: process.env.PUBLIC_URL || '',
  // Image du bot (menu, site). Si le lien ne répond pas, le logo public/assets/logo.png est utilisé.
  MENU_IMAGE: process.env.MENU_IMAGE || 'https://i.ibb.co/zhWpqVpN/IMG-20261016-WA1921.jpg',
  // Propriétaire du bot UNIVER BOYKA et créateur (affichés par .owner)
  OWNER: { name: 'UNIVER BOYKA', number: process.env.OWNER_NUMBER || '224663969365' },
  CREATOR: { name: 'CENTRAL-HEX', number: '224662675862' },
  SCRIPT_URL: process.env.SCRIPT_URL || '',
  TZ: 'Africa/Conakry',
  // Numéros qui peuvent commander toutes les sessions (le propriétaire du bot)
  SUDO: [process.env.OWNER_NUMBER || '224663969365']
};
