const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX | BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`
 
`)
 
 .addField(" TigerInLteX SEVİYE YARDIM", `
 <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
 \ **a!seviye-açk\** seviye sistemini açar
 \ **a!seviye-kapat\** seviye sistemini kapatır
 \ **a!seviye-log\** birisi seviye atladığında ayarlanan kanala mesaj atar
 \ **a!seviyem\** sunucudaki seviyenizi gösterir
 \**a!seviye-ayar\** sunucuya özel ayarlanan seviye ayarlarını gösterir
 \**a!seviye-xp\** sunucuya özel xp (mesaj başına kazanlıan sayı) ayarlarsınız
 \**a!seviye-rol\** sunucuya özel level atlandığında verilecek rolü ayarlarsınız
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
 message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "seviye"
  
}