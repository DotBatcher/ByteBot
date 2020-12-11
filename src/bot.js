//setup

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "$";
client.on('ready', () => {
    console.log('Ready');
});


//simple login script that takes the token from a file.
client.login(process.env.DISCORDJS_BOT_TOKEN)
//end

client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  let isBotOwner = message.author.id == '743153101803880543';

  switch (command) {
    case 'restart': {
      if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login('token');
        });
      });
      break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...').then(m => {
        client.destroy();
      });
      break;
    }
  }
});


client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have permision!'); console.log(`Failed attempt to kick a user.`);
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .kick('')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
            console.log(`kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
            console.log(`banned ${user.tag}`)
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

client.on('message', message => {
  if (message.content === '!tylko jedno w glowie mam') {
    message.channel.send('koksu piec gram');
  }
  if (message.content === '<@!786760220897443841> ur mom gay') {
    message.channel.send('jokes on you i dont have a mom')
  }
  console.log(`[${message.author.tag}]: ${message.content}`);
});

client.on('message', message => {
  if (message.content === '<@!786760220897443841> ur dad gay') {
    message.channel.send('):');
  }
})