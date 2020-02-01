const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');

    avatar = "https://cdn.discordapp.com/attachments/663132724181073942/672994269270900776/1202399791_preview_g4uJDxhZu4o.jpg";
    client.user.setAvatar (avatar);
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
  if (message.content === '?Help') {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!');
    message.channel.send(embed);
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
