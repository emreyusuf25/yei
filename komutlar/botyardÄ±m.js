const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX | BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`

`)
 
 .addField(" TigerInLteX YARDIM MODERASYON", `
 \ **a!istatistik\** botun istatitiklerini gösterir
 \ **a!linkler\** botun linklerini gösterir
 \ **a!komutlar\** botun kaç tane komutları olduğunu gösterir
 \ **a!şikayet\** bot ilgili şikayet öneri veya bug gibi şeyleri bildirirsiniz
 \**a!yapımcım\** botun yapımcısını gösterir
 
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
 message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "by"
  
}