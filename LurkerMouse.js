const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Reporting for duty!');
});

// bot listens to every message on server
client.on('message', message => {
    // only listens to test-channel
    if (message.channel.id === "807307398352076831") {
        // only listens to prefix from a user
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        // displays username and message to console
        console.log(message.author.username + ": " + message.content);

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // returns server information
        if (command === 'server') {
            message.channel.send(`This server's name is ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n` +
                `Created at: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
        }
    }
});

// login to Discord with your app's token
client.login(token);