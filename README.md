# ByteBot



IMPORTANT:
  Make sure you install node.js and you have the npm version. This will not work if you dont install node.js



A simple bot with the ability to kick, ban, turn itself off, and log the chat
setup:
To get the bot up and running, you need to make your own app and bot user, create an app and user here: https://discord.com/developers/applications/
on the "token" area, click copy (DO NOT share your bot token, it is used to log on the bot and if another user gets it they can code the bot to their liking)
go onto the ".env" file, open it with notepad or whatever editor
paste your bot token after (dont delete anything and dont do any spaces, just open and paste)
save the file
in src, open the .js file (notepad should work but again any editor)
find the line of code saying const BOTOWNERID = ''
add your discord client id to the quotation marks. (this allows you only to shut down the bot)
make sure you have npm and node.js installed for this part.
go into command prompt/terminal and cd over to your bot folder (dont cd into the src folder or the bot wont be able to login)
to run/rerun after shutting down, just type "node ./src/bot.js"
