const fs = require('fs');

module.exports = (client) => {
    const categories = fs.readdirSync('./commands');

    for (const category of categories) {
        const cmd_files = fs.readdirSync(`./commands/${category}`).filter(f => f.endsWith('.js'));

        for (const file of cmd_files) {
            const command = require(`../../commands/${category}/${file}`);

            client.commands.set(command.name, command);
        };
    };
};