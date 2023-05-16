const Discord = require("discord.js")
const memberCounter = require('./memberCounter.js');
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES","GUILD_INTEGRATIONS","MESSAGE", 'CHANNEL', 'REACTION'] }
)

client.on('ready', () => {
  memberCounter(client);
});

client.login(process.env.Token)
const mySecret = process.env['Token']
