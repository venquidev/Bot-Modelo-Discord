const Discord = require('discord.js');

module.exports = {
  nombre: "8ball", 
  alias: ["Bola8"], 
  cooldown: 3,


async execute (client, message, args, cmd){

    let respuesta = [
        "En mi opinion, si",
        "Es cierto",
        "Es decididamente asi",
        "Probablemente",
        "Buen pronostico",
        "Todo apunta a que si",
        "Sin duda",
        "Si",
        "Si - definitivamente",
        "Debes confiar en ello",
        "Respuesta vaga, vuelve a intentarlo",
        "Pregunta en otro momento",
        "Sera mejor que no te lo diga ahora",
        "No puedo predecirlo ahora",
        "Concentrate y vuelve a preguntar",
        "Puede ser",
        "No cuentes con ello",
        "Mi respuesta es no",
        "Mis fuentes me dicen que no",
        "Las perspectivas no son buenas",
        "Muy dudoso"
    ]
  var random = respuesta[Math.floor(Math.random() * respuesta.length)]
  if(!args.join(" ")) return message.channel.send("Necesito que me digas una pregunta.")
  if(args.join(" ").includes('ejemplo')) {
    random = 'no'
  }
  const embed = new Discord.MessageEmbed()

  .addField("A su pregunta", `${args.join(" ")}`)
  .addField("Mi respuesta", `${random}`)
  .setColor("YELLOW")
  message.channel.send({ embeds: [ embed ]})
 }

}