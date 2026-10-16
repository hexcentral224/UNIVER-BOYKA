<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,18&height=210&section=header&text=UNIVER%20BOYKA&fontSize=54&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Bot%20WhatsApp%20ouvert%20%C3%A0%20tous%20%E2%80%A2%20bas%C3%A9%20sur%20CENTRAL-HEX&descSize=18&descAlignY=58" alt="UNIVER BOYKA" width="100%"/>

<img src="https://i.ibb.co/zhWpqVpN/IMG-20261016-WA1921.jpg" alt="UNIVER BOYKA" width="200" height="200"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=900&color=00E5FF&center=true&vCenter=true&width=680&height=50&lines=Bot+WhatsApp+ouvert+%C3%A0+tous;Connecte+ton+num%C3%A9ro+avec+un+simple+code;Mod%C3%A9ration+%E2%80%A2+Protections+%E2%80%A2+Mentions+%E2%80%A2+Stickers;42+commandes+pr%C3%AAtes+%C3%A0+l%27emploi;Bas%C3%A9+sur+CENTRAL-HEX" alt="Animation de texte"/>

![Version](https://img.shields.io/badge/version-1.0.0-00E5FF?style=for-the-badge)
![Commandes](https://img.shields.io/badge/commandes-42-8A5BFF?style=for-the-badge)
![Préfixe](https://img.shields.io/badge/pr%C3%A9fixe-.-FF3DAA?style=for-the-badge)
![Node](https://img.shields.io/badge/node-%E2%89%A5%2020-27D17F?style=for-the-badge&logo=node.js&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

</div>

---

## ✨ Présentation

**UNIVER BOYKA** est un bot WhatsApp **ouvert à tous** : n'importe qui peut connecter son numéro depuis le site, avec un simple **code de jumelage**, et profiter du bot dans ses groupes.
Il gère les groupes (ouverture, expulsions, mentions, demandes d'adhésion), protège contre les liens, les insultes et les bots, récupère les messages supprimés et crée des stickers, avec le préfixe **`.`**
Basé sur **CENTRAL-HEX** 🇬🇳.

> 🌍 Chaque personne connectée a **son propre bot** : ses réglages (mode, préfixe, antidelete, anticall) ne concernent que son numéro.

## 🚀 Points forts

| | |
|---|---|
| 🏰 **Gestion de groupe** | open / close, kick, promote / demote, lien, approbation des demandes, purge des inactifs |
| ⚖️ **Modération** | avertissements (3 = expulsion), mute, ban automatique, suivi des sanctions |
| 🛡️ **Protections** | antilink, antibadword, antibot, antimention, antistiker, antitag, antidelete, anticall |
| 📣 **Mentions** | `.tagall` en une seule liste, `.tag` caché pour tous, `.hidetag` pour les admins |
| 🎨 **Médias** | stickers, renommage de sticker, photo de profil, vues uniques, capture d'écran |
| ⚙️ **Réglages** | mode public / privé, préfixe modifiable, état des protections |
| 🌐 **Site de connexion** | page web pour connecter son numéro, compteur de bots en ligne |

## 📱 Aperçu du menu

```
◤━━━━━━━━━━━━━━━━━━◥
  ⚡ 𝗨𝗡𝗜𝗩𝗘𝗥 𝗕𝗢𝗬𝗞𝗔 ⚡
◣━━━━━━━━━━━━━━━━━━◢
Bonsoir 👋

┏━ 𝗜𝗡𝗙𝗢𝗦
┃ 👑 Owner ▸ UNIVER BOYKA
┃ 🔰 Préfixe ▸ [ . ]
┃ 📡 Mode ▸ public
┃ 📚 Commandes ▸ 42
┗━━━━━━━━━━━━━━━━━

▰▰▰▱▱ 🌐 𝗚𝗘́𝗡𝗘́𝗥𝗔𝗟
「.menu」 「.help」 「.test」
「.info」 「.owner」 「.script」

> CENTRAL-HEX 🇬🇳
```

## 📚 Commandes (42)

Le préfixe par défaut est `.` (exemple : `.menu`). Les commandes de groupe demandent que **le bot soit admin**.
Pour le détail d'une commande : `.help kick`

### 🌐 Général

| Commande | Description | Accès |
|---|---|---|
| `.menu` | Afficher le menu | 👥 Tous |
| `.help [commande]` | Aide sur le bot | 👥 Tous |
| `.test` | Tester que le bot répond | 👥 Tous |
| `.info` | Informations sur le bot | 👥 Tous |
| `.owner` | Contacts du propriétaire et du créateur | 👥 Tous |
| `.script` | Le script du bot | 👥 Tous |

### 🏰 Groupe

| Commande | Description | Accès |
|---|---|---|
| `.open` | Ouvrir le groupe (tout le monde peut écrire) | 🛡️ Admins · groupe |
| `.close` | Fermer le groupe (seuls les admins écrivent) | 🛡️ Admins · groupe |
| `.kick @membre` | Expulser un membre | 🛡️ Admins · groupe |
| `.kickall oui` | Expulser tous les membres (sauf les admins) | 🛡️ Admins · groupe |
| `.purge` | Retirer les membres qui n'ont jamais écrit | 🛡️ Admins · groupe |
| `.promote @membre` | Nommer un membre admin | 🛡️ Admins · groupe |
| `.demote @membre` | Retirer le rôle d'admin | 🛡️ Admins · groupe |
| `.link` | Lien d'invitation du groupe | 🛡️ Admins · groupe |
| `.approve` | Accepter les demandes d'adhésion au groupe | 🛡️ Admins · groupe |
| `.totalmembres` | Nombre de membres du groupe | 👥 Tous · groupe |
| `.clan` | Fiche complète du groupe | 👥 Tous · groupe |
| `.gstatuts` | État des protections du groupe | 👥 Tous · groupe |

### ⚖️ Modération

| Commande | Description | Accès |
|---|---|---|
| `.warn @membre [raison]` | Avertir un membre (3 avertissements = expulsion) | 🛡️ Admins · groupe |
| `.sanction` | Voir ou effacer les avertissements et sanctions | 🛡️ Admins · groupe |
| `.mute @membre` | Réduire un membre au silence (ses messages sont supprimés) | 🛡️ Admins · groupe |
| `.unmute @membre` | Rendre la parole à un membre | 🛡️ Admins · groupe |
| `.ban @membre` | Bannir un membre (expulsé et retiré automatiquement s'il revient) | 🛡️ Admins · groupe |

### 📣 Mentions

| Commande | Description | Accès |
|---|---|---|
| `.tagall [message]` | Mentionner tout le monde dans un seul message | 🛡️ Admins · groupe |
| `.tag message` | Mentionner tous les membres sans afficher les noms (pour tout le monde) | 👥 Tous · groupe |
| `.hidetag message` | Mentionner tout le monde sans afficher les noms | 🛡️ Admins · groupe |

### 🛡️ Protections

| Commande | Description | Accès |
|---|---|---|
| `.antilink on / off` | Bloquer les liens | 🛡️ Admins · groupe |
| `.antibadword on / off / add mot / del mot / liste / reset` | Bloquer les insultes et mots interdits | 🛡️ Admins · groupe |
| `.antibot on / off` | Bloquer les autres bots | 🛡️ Admins · groupe |
| `.antimention on / off` | Bloquer les statuts qui mentionnent le groupe | 🛡️ Admins · groupe |
| `.antistiker on / off` | Bloquer les stickers | 🛡️ Admins · groupe |
| `.antitag on / off` | Bloquer les mentions de masse | 🛡️ Admins · groupe |
| `.antidelete on / off` | Récupérer les messages supprimés | 👑 Propriétaire du bot |
| `.anticall on / off / block` | Refuser automatiquement les appels | 👑 Propriétaire du bot |

### 🎨 Médias

| Commande | Description | Accès |
|---|---|---|
| `.stiker` | Créer un sticker à partir d'une image ou d'une vidéo | 👥 Tous |
| `.take nom du pack / auteur` | Changer le nom (pack et auteur) d'un sticker | 👥 Tous |
| `.setpp` | Changer la photo de profil du bot ou du groupe | 👥 Tous |
| `.humm` | Récupérer un média « vue unique » en privé, sans bruit | 👥 Tous |
| `.ss https://exemple.com` | Capture d'écran d'un site web | 👥 Tous |

### ⚙️ Réglages

| Commande | Description | Accès |
|---|---|---|
| `.mode public / prive` | Passer le bot en public ou privé | 👑 Propriétaire du bot |
| `.prompt [nouveau préfixe]` | Voir ou changer le préfixe du bot | 👑 Propriétaire du bot |
| `.setting` | Voir les réglages du bot et du groupe | 👥 Tous |

> ℹ️ Alias : `.stiker` = `.sticker`, `.setting` = `.settings`, `.prompt` = `.prefix`.
> « Propriétaire du bot » désigne la personne dont le numéro est connecté au bot.

## 🔗 Connecter ton numéro

1. Ouvre l'adresse du site du bot.
2. Saisis ton numéro avec l'indicatif (sans `+`) et touche **Générer mon code**.
3. Dans WhatsApp : **Appareils connectés ▸ Connecter un appareil ▸ Se connecter avec un numéro de téléphone**.
4. Saisis le code affiché, puis écris **`.menu`** dans WhatsApp.

## ⚙️ Installation (Render)

1. **Crée un dépôt GitHub** et envoie-y tous les fichiers du projet.
2. Sur [Render](https://render.com) : **New ▸ Web Service**, connecte le dépôt, environnement **Docker**.
3. Ajoute les **variables d'environnement** (toutes facultatives) :

| Variable | Rôle | Valeur par défaut |
|---|---|---|
| `OWNER_NUMBER` | Numéro du propriétaire du bot, avec l'indicatif, sans `+` | `224663969365` |
| `PREFIX` | Préfixe des commandes | `.` |
| `MAX_SESSIONS` | Nombre maximum de numéros connectés en même temps | `25` |
| `PUBLIC_URL` | Adresse du service, pour le maintien en ligne | |
| `SCRIPT_URL` | Lien affiché par `.script` | |
| `MENU_IMAGE` | Lien de l'image du bot (menu, site) | image de UNIVER BOYKA |

4. Lance le déploiement et attends que le service soit **Live**.

> ⚠️ Chaque numéro connecté consomme de la mémoire. Adapte `MAX_SESSIONS` à l'offre de ton hébergeur.

## 🧩 Structure du projet

```
UNIVER-BOYKA/
├── server.js            # serveur web + démarrage des bots
├── commands/            # une commande = un fichier, chargé automatiquement
├── core/                # cœur : config, sessions, gestionnaire, protections, menu, style
├── lib/                 # outils : médias, stickers, utilitaires
├── public/              # site de connexion (index.html) et logo
├── Dockerfile
└── .env.example
```

### ➕ Ajouter une commande

Crée un fichier dans `commands/` :

```js
const { add } = require('../core/registry');

add({
  name: 'salut',
  cat: 'general',
  desc: 'dire bonjour',
  use: 'salut',
  async run(ctx) {
    await ctx.reply('Bonjour 👋');
  }
});
```

Options utiles : `group: true` (groupe uniquement), `admin: true` (admins), `owner: true` (propriétaire du bot), `botAdmin: true` (le bot doit être admin), `alias: ['autre']`.
Pense aussi à l'ajouter dans `core/menu.js` pour qu'elle apparaisse dans le menu.
Les messages dont le titre est écrit en **MAJUSCULES** (ex. `⚙️ *RÉGLAGES*`) reçoivent automatiquement le cadre et la signature UNIVER BOYKA (`core/skin.js`).

## ❓ Questions fréquentes

<details>
<summary><b>Le bot ne répond pas aux commandes</b></summary>

Vérifie le préfixe (`.` par défaut), que le service est **Live** et que ton numéro est bien connecté. En mode privé (`.mode prive`), seul le propriétaire du bot peut l'utiliser.
</details>

<details>
<summary><b>Les protections ne suppriment rien</b></summary>

Le bot doit être **administrateur** du groupe. Vérifie avec `.setting` (ligne « Bot admin »).
</details>

<details>
<summary><b>Le site dit que le bot est complet</b></summary>

Le nombre de numéros connectés a atteint `MAX_SESSIONS`. Augmente cette valeur si ton hébergeur le permet.
</details>

<details>
<summary><b>Comment changer le préfixe ?</b></summary>

Le propriétaire du bot écrit `.prompt !` (1 à 3 symboles). Pour revenir à l'origine : `.prompt reset`.
</details>

## 👑 Contacts

| Rôle | Numéro |
|---|---|
| Propriétaire UNIVER BOYKA | [+224 663 969 365](https://wa.me/224663969365) |
| Créateur (CENTRAL-HEX) | [+224 662 675 862](https://wa.me/224662675862) |

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,18&height=110&section=footer" width="100%" alt=""/>

**✦ Propulsé par CENTRAL-HEX 🇬🇳 ✦**

*Où la technologie rencontre la créativité.*

</div>
