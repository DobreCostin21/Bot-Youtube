const { MessageEmbed } = require("discord.js");
const { random_number } = require("../../utils/utils");

module.exports = {
    name: 'howsimp',
    aliases: ['simprate', 'simp%'],
    description: 'Arata cat de simp este cineva.',
    async execute(message, client, args) {
        let membru = message.mentions.members.first();

        if (!membru) membru = message.member;

        const embed = new MessageEmbed()
        .setTitle(`Masinarie de simp`)
        .setDescription(`**${membru.user.tag}** este ${random_number(0, 100)}% simp.`)
        .setColor("RANDOM")
        .setTimestamp();
        

        message.reply({ embeds : [embed] })
    }
}