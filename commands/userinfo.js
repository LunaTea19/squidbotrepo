const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Replies with info about the given user!')
		.addUserOption(option =>
			option.setName("user")
				.setDescription("The user to get info about")
		),
	async execute(interaction) {
		var user = interaction.options.getUser("user");
		if (user === null) {
			user = interaction.user;
		}
		await interaction.reply(`User's tag: ${user.tag}\nUser's id: ${user.id}\nCreated at: ${user.createdAt}`);
	},
};