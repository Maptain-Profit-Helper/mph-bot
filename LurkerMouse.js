const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Reporting for duty!');
});

client.on('message', message => {
    if (message.channel.id === "807307398352076831") { // test-channel only
        if (message.author.bot) return; // ignore bots
        // console.log(message.author.username + ": " + message.content);

        let args = message.content.split(/\r?\n/g);
        for (let i = 0; i < args.length; i++) {
            console.log(args[i].toLowerCase());
        }
    
    }
});

client.login(token);