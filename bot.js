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
    	const exampleEmbed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
