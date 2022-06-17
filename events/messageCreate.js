const Discord = require('discord.js')
const fs = require('fs');
let { readdirSync } = require('fs');
const path = require("path");
module.exports = {
    name: 'messageCreate',
    run: async(message, client) => {

    

        let prefix = '!!'

        if (!message.content.startsWith(prefix)) return;
        if (message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let cmd = client.commands.find((c) => c.nombre === command || c.alias && c.alias.includes(command));
        if (cmd) {
            try {
                cmd.execute(client, message, args)
            } 
            
            catch (e) {}
            
        }

        if(!cmd){

            const embed = new Discord.MessageEmbed()

            .setTitle("❌ | Comando no encontrado")
            .setDescription(`El comando "${command}" no existe.`)
            .setColor("RED")
            .setFooter("Utliza el comando b/help")
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

            if(message.content === prefix) return

        }
    }
}