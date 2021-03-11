const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();
const prefix = process.env.PREFIX;
const tables = ['(╯°□°）╯︵ ┻━┻', '┬──┬﻿ ¯\\\\_(ツ)', '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻', '┻━┻ ︵﻿ ¯\\\\(ツ)/¯ ︵ ┻━┻', '┬─┬ノ( º _ ºノ)',
  '(ノಠ益ಠ)ノ彡┻━┻'];

client.once('ready', () => {
  client.user.setActivity('Deef breaking stuff', { type: 'WATCHING' });
  // eslint-disable-next-line no-console
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const command = message.content.trim().toLowerCase();

  switch (command) {
    case 'mand':
      message.channel.send('MAND!');
      break;
    case 'flip':
      message.channel.send(tables[Math.floor(Math.random() * tables.length)]);
      break;
    case 'unflip':
      message.channel.send('┬─┬ ノ( ゜-゜ノ)');
      break;
    default:
  }
});

client.login();
