
<br />

# FLOW.js
[![Discord Server](https://img.shields.io/discord/773352845738115102?color=5865F2&logo=discord&logoColor=white)](https://flow.js.org/invite)
[![NPM Version](https://img.shields.io/npm/v/aoi.js.svg?maxAge=3600)](https://www.npmjs.com/package/flow.js)
[![NPM Downloads](https://img.shields.io/npm/dt/aoi.js.svg?maxAge=3600)](https://www.npmjs.com/package/flow.js)
[![publish-dev](https://github.com/flow-js/flow.js/actions/workflows/publish-dev.yml/badge.svg?branch=master)](https://github.com/flow-js/flow.js/actions/workflows/publish-dev.yml)
## About
FLOW.js is a package with simplified and ready-to-use functions for Discord Bot Developers to develop their own Discord Bots.

Aiming to be the easiest package to learn

It's swift and flexible using functions.

It's still in project

Open Source for the Community.
## Installation
**Node.js Version 12.0.0 or above is Required**
```shh-session
npm install flow.js
```

## Example
```js
const flow = require('flow.js'); // TAKING DATA FROM FLOW.JS
const bot = new flow.Bot ({
  token: 'BOT_TOKEN', // DISCORD BOT TOKEN
  prefix: ['!', '<@$clientID> '] // DISCORD BOT PREFIX
});

bot.onMessage(); // LETTING BOT TO SEND MESSAGE
bot.readyCommand({ // SENDING DATA ON THIS COMMAND WHEN BOT ONLINE
  channel: '', // CHANNEL ID, OPTIONAL
  code: `
  $log[Activating Bot $userTag[$clientID]]
  $title[$userTag[$clientID] is Now Up!]
  $color[BLUE]
  $description[You can now use bot again]
  `
});
```
