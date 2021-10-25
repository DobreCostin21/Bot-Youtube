module.exports = {
	name: 'messageCreate',
	async execute(message, client) {
		if (!message.content.startsWith(client.prefix) || message.author.bot) return;

        const args = message.content.slice(client.prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        if (!command) return;
        
        try {
            command.execute(message, client, args);
        } catch (e) {
            console.log(e)
        }
	},
};