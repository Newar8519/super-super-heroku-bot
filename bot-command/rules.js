const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '?Help') {
    const embed = new RichEmbed()
      .setTitle('Support Command!')
      .setColor(0xFF0000)
      .setDescription('This works if you see this.');
    message.channel.send(embed);
  }
});

client.login(process.env.BOT_TOKEN);
