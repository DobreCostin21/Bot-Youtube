const utils = require('../../utils/utils');
module.exports = {
    name: 'numar',
    aliases: ['nr'],
    description: 'Trimite un numar random.',
    async execute(message, client, args) {
        if (!args.length) return message.reply(`Trebuie sa specifici doua numere.`);

        message.reply(`Numarul random: ${utils.random_number(parseInt(args[0]), parseInt(args[1]))}`)
    }
}