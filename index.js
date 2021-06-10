const Discord = require('discord.js');

const client = new Discord.Client();

const event = require('./events');

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.channel.send('pong');
        console.log(event.getEvents());
    }
});

client.login('ODUyNDA4MTUwMjI0NjY2NjQ0.YMGY8w.B6wyLKFJaajDIr2njqtxZuL3E2A');
