import { Client } from 'discord.js';
import { prefix, token, tables } from './config.json';

const client = new Client();

client.once('ready', () => {
  // eslint-disable-next-line no-console
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

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
