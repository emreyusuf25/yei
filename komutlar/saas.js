const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const draje = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || draje.prefix 
  
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: **${prefix}sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':worried: **Bu komutu kullanmak için __Mesajları Yönet__ yetkisine sahip olmalısın!** :worried:')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`**Artık Selam Verilince Otomatik Olarak As Denecektir. Kapatmak için "\`${prefix}sa-as kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`**Artık biri sa diyince cevap vermeyecek.**`)

  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as'],
  permLevel: 1,
}

exports.help = {
      name: "saas"
  
}
 
