const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const utils = require("../../utils/utils");

module.exports = {
  name: "joke",
  aliases: ["gluma"],
  description: "Trimite o gluma.",
  async execute(message, client, args) {
    fetch(
      "https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,sexist"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const embed = new MessageEmbed()
          .setTitle(`${utils.gl_translate(`${data.setup}`, 'en')}`)
          .setDescription(`**${utils.gl_translate(`${data.delivery}`, 'en') }**`)
          .setTimestamp()
          .setColor("RANDOM")
          .setFooter(
            `Categorie: ${utils.gl_translate(`${data.category}`, 'en')}`,
            message.member.user.displayAvatarURL()
          );
          message.reply({ embeds: [embed] })
      });
  },
};
