const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:worried: **Bu komutu kullanabilmek için __Yönetici__ **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`:wink: **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(` **otorol Sistemi başarılı bir şekilde kapatıldı.** `)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-kapat'],
  permLevel: 0,
}

exports.help = {
      name: "ork"
  
}
