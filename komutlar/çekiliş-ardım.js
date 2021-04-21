const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`

`)
 
 .addField(" TigerInLteX ÇEKİLİŞ KOMUTLARI", `
 <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
\**a!başlat:\** çekilişi başlatırsınız
\**a!sonlandır (çekiliş id):\** çekilişi erken bitirmek için yazarsınız
\**a!yenile(çekiliş id) :\** çekiliş kazananlarını değiştirmek için kullanılır
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
  message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "çekiliş"
  
}