const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Yapımcım :  <@746439920033333299>")
  .setFooter("TigerInLteX Yönetimi")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcım"],
  permLvl: 0,
}

exports.help = {  
name: "yapımcı"
}