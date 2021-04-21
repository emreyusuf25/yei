
const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const pinkcode = new Discord.MessageEmbed()
.setTitle("Pong!")
.setColor('RANDOM')
.addField(`API Gecikme: **${Math.round(client.ws.ping)}**ms`)
.setFooter(`TıgerInLteX | Bot`, message.author.displayAvatarURL());
  
return message.channel.send(pinkcode)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0,
}

exports.help = {
      name: "ping"
  
}