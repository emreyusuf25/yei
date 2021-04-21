const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:worried: **Bu komutu kullanabilmek için** __Yönetici__ **yetkisine sahip olmalısın.** :worried:`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`:wink: **Ayarlanmamış bir özellik sıfırlanamaz! :wink: **`)
 
 
  message.channel.send(`<a:verifiedb:752810878465736736>  **Otorol mesajı başarılı bir şekilde sıfırlandı.** <a:verifiedb:752810878465736736>`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-msj'],
  permLevel: 0,
}

exports.help = {
      name: "otomesj"
  
}