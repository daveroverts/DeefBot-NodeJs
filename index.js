const Discord = require('discord.js');
const cron = require('node-cron');
const tables = require('./data/tables.json');
const activities = require('./data/activities.json');

require('dotenv').config();

const client = new Discord.Client();
const prefix = process.env.PREFIX;

function setActivity() {
  const activity = activities[Math.floor(Math.random() * activities.length)];
  client.user.setActivity(activity.message, { type: activity.type });
}

cron.schedule('* 0 * * *', () => {
  setActivity();
});

client.once('ready', () => {
  setActivity();
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
