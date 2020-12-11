# ByteBot
A simple bot with the ability to kick, ban, turn itself off, and log the chat
setup:
To get the bot up and running, you need to make your own app and bot user, create an app and user here: https://discord.com/developers/applications/
on the "token" area, click copy (DO NOT share your bot token, it is used to log on the bot and if another user gets it they can code the bot to their liking)
go onto the ".env" file, open it with notepad or whatever editor
paste your bot token after (dont delete anything and dont do any spaces, just open and paste)
save the file
in src, open the .js file (notepad should work but again any editor)
find the line of code saying "let isBotOwner = message.author.id == '743153101803880543';"
replace the numbers at the end with your discord client id (this allows you specificly to shut down the bot)
make sure you have npm and node.js installed for this part.
go into command prompt/terminal and cd over to your bot folder
to run/rerun after shutting down, just type "node ./src/bot.js"
