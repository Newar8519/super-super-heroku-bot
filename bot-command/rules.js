const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'how to embed') {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!');
    message.channel.send(embed);
  }
});

client.login('NjcyOTkwMjA5MTY3ODUxNTU5.XjWB6g.8IbhosZ3Z05qeeRv4Ci0RutAQro');
