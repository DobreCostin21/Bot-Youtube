const { MessageEmbed } = require("discord.js");
const reddit = require("scrap-reddit");
const utils = require("../../utils/utils");

module.exports = {
  name: "meme",
  aliases: [],
  description: "Trimite un meme de pe reddit",
  async execute(message, client, args) {
    const post = await reddit.randomPost("romaniamemes");

    let embed = new MessageEmbed()
      .setTitle(`${post.data.title}`)
      .setURL(`https://reddit.com${post.data.permalink}`)
      .setImage(post.data.url_overridden_by_dest)
      .setTimestamp()
      .setFooter(`r/${post.data.subreddit}`)
      .setColor("RANDOM");

    message.reply({ embeds: [embed] });
  },
};

//
