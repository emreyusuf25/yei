const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`
 
`)
 
 .addField(" TigerInLteX GÜNCELLEMELER", `
 <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
 **TigerInlTeX yeni güncelleme versiyonu 2.1.1 güncelleme ile gelen yenilikler**
\**a!güncellemeler :\** güncelleme komutudur yeni güncellemede eklendi
\**a!çekiliş-yardım :\** çekiliş komutlarımız eklendi artık kullanıma hazır
\**a!seviye-yardım :\** seviye sistemi eklendi kulanıma hazır (beta versiyondur hatalar olabilir !!)
**uyarı sistemi güncellendi artık kullanılabilir hale getirildi**
**Botumuzun Web sitesi açıldı görmek için [Tıkla!](http://tigerinltex-bot.tk/)**
**yeni güncellemeler bu şekildedir**
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
  message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güncellemeler'],
  permLevel: 0,
}

exports.help = {
      name: "güncel"
  
}