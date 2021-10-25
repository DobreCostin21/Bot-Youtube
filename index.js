const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 32767 });
const utils = require('./utils/utils');

client.prefix = "!";
client.commands = new Collection();

require('dotenv').config();

['cmd', 'event'].forEach(h => {
    require(`./utils/handlers/${h}`) (client);
});

client.login(process.env.token)