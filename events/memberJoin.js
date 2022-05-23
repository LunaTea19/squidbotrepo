module.exports = {
	name: 'guildMemberAdd',
	execute(guildMember) {
		guildMember.guild.channels.cache.get(`${guildMember.guild.systemChannelId}`).send(`**Welcome to ${guildMember.guild.name}, <@${guildMember.user.id}>!** (Account Created on ${guildMember.user.createdAt})`);
	},
};