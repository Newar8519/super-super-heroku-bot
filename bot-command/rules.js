const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '?Rules') {
    	message.channel.send('True!');
  	}
});

client.login(process.env.BOT_TOKEN);
