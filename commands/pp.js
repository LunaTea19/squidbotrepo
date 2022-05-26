const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pp')
		.setDescription('Replies with small or big pp'),
	async execute(interaction) {
		var rng = Math.floor(Math.random() * 10) + 1;
		if (rng == 2) {
			await interaction.reply('u literally have no pp L');
		}
		else {
			await interaction.reply(`8${'='.repeat(Math.round(Math.random() * 20) + 0)}D`);
		}
	},
};