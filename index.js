const Discord = require('discord.js');

const client = new Discord.Client();

const event = require('./events');

client.on('message', (msg) => {
    if (msg.content === '!events') {
        msg.channel.send(event.getEvents(msg.createdTimestamp));
    }
});

client.login('ODUyNDA4MTUwMjI0NjY2NjQ0.YMGY8w.B6wyLKFJaajDIr2njqtxZuL3E2A');
