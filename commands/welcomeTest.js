const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcometest')
		.setDescription('Triggers a welcome message.'),
	async execute(interaction, client) {
		client.emit('guildMemberAdd', interaction.member);
	},
};