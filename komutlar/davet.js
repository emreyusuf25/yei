const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setColor("#050000")
    .setAuthor(`TigerInLteX`, client.user.avatarURL())
    .setDescription(
      "**• [TigerInLteX BOTU DAVET ET.](https://discord.com/api/oauth2/authorize?client_id=779312650580131890&permissions=8&scope=bot)** **• [TigerInLteX BOTUN DESTEK SUNUCUSU](https://discord.gg/fVAarZUtUc)** **• [TigerInLteX BOTA OY VER](https://top.gg/bot/779312650580131890/vote)** **• [TigerInLteX Web Sitesi](http://tigerinltex-bot.tk/)**"
  
    )
    .setFooter(`TigerInLteX | BOT`)
    .setThumbnail(client.user.avatarURL());
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: 0,
}

exports.help = {
      name: "link"
  
}
