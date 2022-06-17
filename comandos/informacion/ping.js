const Discord = require("discord.js")

module.exports = {
    nombre: "ping",
    alias: ["..."],

execute(client, message, args){
    const embed = new Discord.MessageEmbed() 
    .setTitle("PING")
    .setColor("RANDOM")
    .setDescription(`**${client.ws.ping}ms**`)
    .setFooter("BrinzBot")
    .setTimestamp()

    message.channel.send({ embeds: [embed] })

    }

}