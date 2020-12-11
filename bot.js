//setup

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "$";
client.on('ready', () => {
    console.log('Online!');
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
  
  if (!message.guild) return;

  
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have permision!'); console.log(`Failed attempt to kick a user.`);
    
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
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
            console.error(err);
          });
      } else {
        
        message.reply("That user isn't in this guild!");
      }
      
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('!ban')) {
    
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
            console.log(`banned ${user.tag}`)
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
