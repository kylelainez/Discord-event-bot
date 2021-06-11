require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

const event = require('./events');

const messages = [
    'Dazai Gehy!!!',
    'Dazai is Gehy.',
    'Dazai is very Gehy.',
    'Dazai Gehy s39',
];

client.on('message', (msg) => {
    if (msg.content === '!events') {
        msg.channel.send(event.getEvents(msg.createdTimestamp));
    }

    if (msg.content === '!gehy') {
        msg.channel.send(messages[Math.floor(Math.random() * 4)]);
    }
});

client.login(process.env.client);
