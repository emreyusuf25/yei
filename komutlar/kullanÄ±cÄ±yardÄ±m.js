const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`

`)
 
 .addField(" TigerInLteX KULLANICI YARDIM ", `
 <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
\ **a!avatar\** sizin yada etiketlediğiniz kişini profil fotoğrefını gösterir
\**a!yılbaşı\** yılbaşına ne kadar kaldığını gösterir
\**a!oylama\** ismini yazdığınız oylama açar
\**a!okulsayaç\** okulun kapanmasına ne kadar kaldını gösterir
\**a!kullanıcı-profil\** kullanıcı bilgilerini atar
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
 message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "ky"
  
}
