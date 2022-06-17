const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const config = require("./config.json");
const estados = ["coloca la presencia de tu bot aqui"]

 //PRESENCIA BOT

client.on('ready', async () => {
  setInterval(() => {
    client.user.setPresence({
      status: 'idle',
      activities: [{
        name: estados[Math.floor(Math.random() * estados.length)],
        type: 'PLAYING',
        status: 'idle'
      }]
    })
  }, 15000);

 })

 //PRESENCIA BOT

 //COMMANDHANDLER

let { readdirSync } = require('fs');
client.commands = new Discord.Collection();
const commands = readdirSync('./comandos') 
for (let folder of commands) { 
  let files = readdirSync(`./comandos/${folder}`); 
  for(let file of files) { 
    let cmd = require(`./comandos/${folder}/${file}`) 
    client.commands.set(cmd.nombre, cmd) 
  }}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
  for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.run(...args, client));
    } else {
      client.on(event.name, (...args) => event.run(...args, client));
    }
  }

  //COMMAND HANDLER

  process.on('unhandledRejection', error => {
    console.error(error);
});

console.log("✅")

client.login(config.token)