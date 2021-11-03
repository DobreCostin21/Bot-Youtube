const { MessageEmbed } = require('discord.js');
const { rand_item } = require('../../utils/utils');

module.exports = {
    name: '8ball',
    aliases: ['8-ball'],
    description: 'Raspunde la o intrebare.',
    async execute(message, client, args) {
        let ask = args.join(" ");

        if (!ask) return message.reply(`Intreaba-ma ceva!`);

        let rasp = [
            "Cu siguranta da!",
            "Cel mai probabil",
            "Da.",
            "Nu.",
            "Greu de spus...",
            "Intreaba mai tarziu.",
            "Concentreaza-te si intreaba mai tarziu.",
        ]
        const embed = new MessageEmbed()
        .setDescription(
            `Ai intrebat: \`${ask}\` \nRaspunsul Tau: \`${rand_item(rasp)}\``
        )
        .setColor("RANDOM")
        .setTimestamp();

        message.reply({ embeds: [embed] })
    }
}