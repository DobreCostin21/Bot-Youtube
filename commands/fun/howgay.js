const { MessageEmbed } = require("discord.js");
const { random_number } = require("../../utils/utils");

module.exports = {
    name: 'howgay',
    aliases: ['gayrate', 'gay%'],
    description: 'Arata cat de gay este cineva.',
    async execute(message, client, args) {
        let membru = message.mentions.members.first();

        if (!membru) membru = message.member;

        const embed = new MessageEmbed()
        .setTitle(`Masinarie de gay`)
        .setDescription(`**${membru.user.tag}** este ${random_number(0, 100)}% gay.`)
        .setColor("RANDOM")
        .setTimestamp();
        

        message.reply({ embeds : [embed] })
    }
}