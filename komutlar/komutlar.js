const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`

`)
 .setDescription('**\n Toplam**  **'+ client.commands.size +'** **Komutum Bulunmaktadır!**')
.addField(" TigerInLteX BOTUN KOMUTLARI ", `
\`ban\`,\`unban\`,\`bansorgulama\`,\`kick\`,\`küfür-engel\`,\`mod-log\`,\`otorol-ayarla\`,\`reklam-engel\`,\`sayaç-ayarla\`,\`rol-al\`,\`rol-ver\`,\`sil\`,\`sa-as\`,\`yavaş-mod\`,\`davet\`,\`istatistik\`,\`komutlar\`,\`prefix-ayarla\`,\`yapımcım\`,\`şikayet\`,\`aşkölçer\`,\`balık-tut\`,\`doğruluk-cesaret\`,\`sigarayak\`,\`ters\`,\`tkm\`,\`yazı-tura\`,\`avatar\`,\`yılbaşı\`,\`okulsayaç\`,\`oylama\`,\`kullanıcı-bilgi\`
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar'],
  permLevel: 0,
}

exports.help = {
      name: "kmotlar"
  
}
