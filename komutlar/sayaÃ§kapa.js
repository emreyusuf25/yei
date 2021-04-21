const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:cry: **Bu komutu kullanabilmek için __Yönetici__ yetkisine sahip olmalısın.** :cry:`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`:wink:  **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`**Sayaç başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaç-kapat'],
  permLevel: 4,
}

exports.help = {
      name: "sk"
  
}
