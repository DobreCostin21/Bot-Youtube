const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports = {
    name: 'nasanews',
    aliases: ['nasa'],
    description: '',
    async execute(message, client, args) {
        fetch('https://api.nasa.gov/planetary/apod?api_key=0CguGzLvgT5bV8XetFbxNGqcP4azIjceblQwOjLY').then((res) => {
            return res.json();
        }).then((data) => {
            let embed = new MessageEmbed()
            .setTitle(data.title)
            .setDescription(`**${data.explanation}**`)
            .setImage(data.url)
            .setFooter(`Data: ${data.date}`, client.user.displayAvatarURL())
            .setColor("RANDOM")
            .setTimestamp()

            message.reply({ embeds: [embed] })
        })
    }
}