const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Yapımcım :  <@746439920033333299> | TigerInlTeX yönetimi")
  .setFooter("TigerInlTeX")
  message.channel.send(rexus);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yapımcı'],
    permLevel: 0,
  }
  
  exports.help = {
        name: "yapımcım"
    
  }