const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '?Rules') {
    	message.channel.send('pong\n True!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
