//setup

require('dotenv').config();

const Discord = require('discord.js')
const BOTOWNERID = '743153101803880543'
const { Client, Guild } = require('discord.js');
const client = new Client();
const PREFIX = '!';
client.on('ready', () => {
    console.log('Ready');
});

//login

client.login(process.env.discordtoken)


//code is all combined

//since it seems your digging through the code, well.. hi

client.on('message', message => {

  var d = new Date();
  var n = d.getFullYear();
  var j = new Date();
  var g = d.getMonth();
  var a = new Date();
  var b = d.getDate();
  var e = new Date();
  var p = d.getHours();
  var c = new Date();
  var k = d.getMinutes();
  var h = new Date();
  var m = d.getSeconds();

  if (!message.guild) return;
  let {guild} = message;

  //MsgLog
  //Name is only for github
  if (!message.author.bot) {console.log(`${n}-${g+1}-${b}:${p}:${k}:${m} (${guild.name}) (#${message.channel.name}) ${message.author.tag}: ${message.content}`)};
 
  if (message.content === `${PREFIX}help`) {
    message.channel.send('(1.0.1) Hi! im bytebot, im open source and can be hosted anywhere, to customize my prefix change the top line of the code saying const PREFIX = "!" replace the ! with whatever you want!  ')
    }
      if (message.content.startsWith(`${PREFIX}kick`)) {
          if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('Insufficient Permissions');
          }
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('')
              .then(() => {
                message.reply(`Kicked.`);
                console.log(`${user.tag} was kicked by ${message.author}`);
              })
              .catch(err => {
                message.reply('I was unable to kick the member');
                console.error(err);
              });
          } else {
            const KickNoGuild = new Discord.MessageEmbed()
              .setTitle('Cannot kick member')
              .setDescription('The member was not in the guild.')
            message.channel.send(KickNoGuild);
          }
        } else {
          const KickNoMember = new Discord.MessageEmbed()
              .setTitle('Cannot kick member')
              .setDescription('The member was not mentioned')
          message.channel.send(KickNoMember);
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
      // This needs to be updated
  if (message.content.startsWith(`${PREFIX}ban`)) {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
  return message.channel.send('Insufficient Permissions');
    }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: '',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
            console.log(`${user.tag} was banned by ${message.author}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        const BanMemberNotHere = new Discord.MessageEmbed()
          .setTitle('Cannot ban member')
          .setDescription('The member is not here')
        message.channel.send(BanMemberNotHere);
      }
    } else {
      const BanNoMember = new Discord.MessageEmbed()
        .setTitle('Cannot ban member')
        .setDescription('The member was not mentioned')
      message.channel.send(BanNoMember);
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === '787546411151261706') { // This is the id the bot checks for reactions, change this id to your message id
    switch (name) {
      case '🐍': // Replace this with the unicode version of the emoji you want, you can get that by doing "\:poop:"
        member.roles.add('787539699651969045'); // All these are the role ids that are added, again replace this with yours
        break; //If you dont need this many and you want only 1, 2, 3, or 4 just remove one of the lines, break, member.roles.add, and case. Same thing for more
      case '☕':
        member.roles.add('787539856058351656');
        break;
      case '🕸️':
        member.roles.add('787539914598252544');
        break;
      case '🖕':
        member.roles.add('787539952182624287');
        break;
      case '☑️':
        member.roles.add('786878336794230804');
        break;
    }
  }
});
