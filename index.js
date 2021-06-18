require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
let channel;
let minuteInterval;
const event = require('./events');
const image = require('./');

client.on('ready', async () => {
    channel = await client.channels.fetch('854564667321483304');
    minuteInterval = setInterval(() => {
        if (new Date().getUTCMinutes() === 0) {
            startTimer();
        }
    }, 60000);
});

client.on('message', (msg) => {
    if (msg.content.startsWith('!gehy')) {
        const taggedUser = msg.mentions.users.first();
        const message = getMessage(
            Math.floor(Math.random() * 4),
            taggedUser ? taggedUser.username : 'Dazai'
        );
        msg.channel.send(message);
    }

    if (msg.content === '!eventsall') {
        msg.channel.send('Colony Action', { files: ['./colony_image.jpeg'] });
    }
});

function getMessage(num = 0, name = 'Dazai') {
    const messages = [
        `${name} Gehy!!!`,
        `${name} is Gehy.`,
        `${name} is very Gehy.`,
        `${name} Gehy s39`,
    ];

    return messages[num];
}

function sendMessage() {
    channel.send(event.getEvents(new Date()));
}

function startTimer() {
    clearInterval(minuteInterval);
    sendMessage();
    const hourInterval = setInterval(() => {
        sendMessage();
    }, 1000 * 60 * 60);
}

client.login(process.env.client);
