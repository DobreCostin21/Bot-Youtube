const reddit = require("scrap-reddit");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "meme",
  aliases: [],
  description: "Trimite un meme random",
  async execute(message, client, args) {
    const post = await reddit.randomPost("romaniamemes");

    if (post.data.is_video) {
      return message.reply(`Nu am putut trimite meme-ul.`);
    } else {
      const embed = new MessageEmbed()
        .setTitle(`${post.data.title}`)
        .setURL(`https://reddit.com${post.data.permalink}`)
        .setImage(`${post.data.url}`)
        .setColor("RANDOM")
        .setFooter(`r/${post.data.subreddit} | 👍${post.data.ups} 👎${post.data.downs}`)
        .setTimestamp()

    message.reply({ embeds: [embed] })
    }
  },
};
