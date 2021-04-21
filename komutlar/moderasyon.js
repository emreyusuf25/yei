const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor(`TigerInLteX BOT`, client.user.avatarURL())
 .setColor("GREEN")
 .setDescription(`
 
`)
 
 .addField(" TigerInLteX MODERASYON YARDIM", `
 <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
\**a!ban :\** etiketlediğiniz kişiyi banlar
\**a!mod-log :\** etiketlediğiniz kanalı log kanalı yapar
\**a!kick :\** etiketlediğiniz kişiyi sunucudan kovar
\**a!unban :\** id sini yazdığınız kişinin banını kaldırır
\**a!sil :\** belirtiğiniz kadar mesajı siler
\**a!bansorgulama :\** id sini yazdığınız kişinin neden banlandığını gösterir
\**a!küfür-enngel :\** sunucuda küfür edildiğinde o küfürü siler
\**a!reklam-engel :\** sunucuda reklam atıldığında o linki siler
\**a!otorol-ayarla :\** otorol sistemini ayarlarsınız
\**a!sayaş-ayarla :\** sayaç sistemi auarşarsınız
\**a!rol-al :\** etiketlediiğiniz kişiden rol alırsınız
\**a!rol-ver :\** etiketlediğiniz kişiye istediğiniz rolüü verirsiniz
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
  message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "my"
  
}