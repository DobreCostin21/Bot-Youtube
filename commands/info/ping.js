module.exports = {
    name: 'ping',
    aliases: [],
    description: '',
    async execute(message, client, args) {
        message.reply(`Pong! ${client.ws.ping}ms`);
    }
}