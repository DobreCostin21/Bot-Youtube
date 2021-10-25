const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["spune", "echo"],
  description: "Trimite tot ce spui tu.",
  async execute(message, client, args) {
    if (!args.length) return message.reply(`Trebuie sa spui ceva ca sa spun si eu... :)`)

    let embed = new MessageEmbed()
      .setTitle(`${message.member.user.tag} a spus:`)
      .setDescription(`${args.join(" ")}`)
      .setTimestamp()
      .setFooter(
        `${message.member.user.username}`,
        message.member.user.displayAvatarURL()
      )
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
  },
};
