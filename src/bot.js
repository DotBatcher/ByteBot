//setup

require('dotenv').config();

const BOTOWNERID = ''
const { Client, Guild } = require('discord.js');
const client = new Client();
const PREFIX = "!";
client.on('ready', () => {
    console.log('Ready');
});

client.login(process.env.DISCORDJS_BOT_TOKEN)

client.on('message', message => {
  if (!message.guild) return;
  let {guild} = message;
  console.log(`(${guild.name}) (#${message.channel.name}) ${message.author.tag}: ${message.content}`);
  if (message.content === `${PREFIX}help`) {
    message.channel.send('(1.0.1) Hi! im bytebot, im open source and can be hosted anywhere, to customize my prefix change the top line of the code saying const PREFIX = "!" replace the ! with whatever you want!  ')
    }
      if (message.content.startsWith(`${PREFIX}kick`)) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                message.reply(`Successfully kicked ${user.tag}`);
              })
              .catch(err => {
                message.reply('I was unable to kick the member');
                console.error(err);
              });
          } else {
            message.reply("That user isn't in this guild!");
          }
        } else {
          message.reply("You didn't mention the user to kick!");
        }
      }
      if (message.content === `${PREFIX}shutdown`) {
        if (message.author.id === BOTOWNERID) {
          console.log('Shutdown starting');
          message.channel.send('Shutting down...')
          client.destroy
          process.exit(1);
        } else {
          message.channel.send('You are not the set bot owner. Access Denied')
        }
      }
  if (message.content.startsWith(`${PREFIX}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
