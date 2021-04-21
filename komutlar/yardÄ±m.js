const Discord = require ("discord.js");
exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setAuthor(`TigerInLteX | BOT`, client.user.avatarURL())
.setThumbnail("https://cdn.discordapp.com/avatars/779312650580131890/d6f8cda284a7585d477fac5794618a33.webp")
.setDescription(`
 
> **» a!istatistik**  :Botun istatistik bilgilerini açar. Şuanda kullanılan prefix ** a!** 
▬▬▬▬▬[TigerInLteX BOT]▬▬▬▬▬

> **» a!moderasyon-yardım :** Moderasyon komutlarını gösterir
> **» a!eğlence-yardım :** Eğlence komutlarını gösterir
> **» a!kullanıcı-yardım :** Kullanıcı komutularını gösterir
> **» a!bot-yardım :** bot ile ilgili komutları gösterir 
> **» a!seviye-yardım :** seviye yardım komutlarını gösterir 
> **» a!çekiliş-yardım :** çekiliş yardım komutlarını gösterir
> **» a!güncellemeler :** yeni gelen komutları güncellemeleri gösterir
**▬▬▬▬▬▬[**<a:onay:793732568372871179>**Bilgilendirme**<a:onay:793732568372871179>**]▬▬▬▬▬▬**

> <a:onay:793732568372871179>  **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin! önerilerinizi a!öneri ile belirtebilirsiniz**
> <a:onay:793732568372871179>  **Botun Davet Linkine Gitmek İçin [Tıkla!](https://discord.com/api/oauth2/authorize?client_id=779312650580131890&permissions=8&scope=bot)**
> <a:onay:793732568372871179>  **Bota oy vermek İçin [Tıkla!](https://top.gg/bot/779312650580131890/vote)**
> <a:onay:793732568372871179>  **Botun destek sunucusuna gelmek için [Tıkla!](https://discord.gg/EScwkXXUPw)**
> <a:onay:793732568372871179>  **Botun Websitesine gelmek için [Tıkla!](http://tigerinltex-bot.tk/)**
> <a:onay:793732568372871179>  **botun şuanki pingi: ${client.ws.ping} ms ** 
> <a:onay:793732568372871179>  **Aktif discord.js sürümüm: ${Discord.version} **
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setImage(`https://i.hizliresim.com/yMSCH1.gif`)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
}

exports.help = {
      name: "yardım"
  
}