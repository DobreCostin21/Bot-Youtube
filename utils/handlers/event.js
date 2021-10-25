const fs = require("fs");

module.exports = (client) => {
  const categories = fs.readdirSync("./events");

  for (const category of categories) {
    const eventFiles = fs
      .readdirSync(`./events/${category}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const event = require(`../../events/${category}/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
  }
};
