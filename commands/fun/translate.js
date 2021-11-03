const translate = require('@iamtraction/google-translate');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'translate',
    aliases: ['traducere'],
    description: 'Traduce orice.',
    async execute(message, client, args) {
        const to = args[0]

        if (!to) {
            return message.reply(`Trebuie sa specifici o limba in care vrei sa traduci. Ai aici codurile de la fiecare tara: <https://bit.ly/3wdP9r6>`)
        }


        const text = args.slice(1).join(' ');

        const translated = await translate(text, { from: 'auto' , to: to })

        const embed = new MessageEmbed()
        .setAuthor(`Traducere:`)
        .setDescription(`${translated.text}`)
        .setColor("RANDOM")
        .setTimestamp()

        message.reply({ embeds: [embed] })
    }
}