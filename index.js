require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
let channel;
let minuteInterval;
const event = require('./events');

const messages = [
    'Dazai Gehy!!!',
    'Dazai is Gehy.',
    'Dazai is very Gehy.',
    'Dazai Gehy s39',
];

client.on('ready', async () => {
    channel = await client.channels.fetch('854564667321483304');
    minuteInterval = setInterval(() => {
        if (new Date().getUTCMinutes() === 0) {
            startTimer();
        }
    }, 60000);
});

client.on('message', (msg) => {
    if (msg.content === '!events') {
        msg.channel.send(event.getEvents(msg.createdTimestamp));
    }

    if (msg.content === '!gehy') {
        msg.channel.send(messages[Math.floor(Math.random() * 4)]);
    }

    if (msg.content === '!test') {
        msg.channel.send(`Minutes: ${new Date().getUTCMinutes()}`);
        console.log();
    }
});

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
