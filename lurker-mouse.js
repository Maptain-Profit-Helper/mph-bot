const parser = require('./parser');
const Discord = require('discord.js');
const { TOKEN } = require('./config.json');
const { addMouseToDatabase } = require('./parser');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Reporting for duty!');
});

client.on('message', message => {
    if (message.channel.id === "807307398352076831") { // test-channel only
        if (message.author.bot) return; // ignore bots

        let lines = message.content.split(/\r?\n/g);
        console.log(lines);
        for (let i = 0; i < lines.length; i++) {
            parser.addMouseToDatabase(lines[i].toLowerCase());
        }
    }
});

client.login(TOKEN);