const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("TigerInLteX BOT", message.author.avatarURL)
 .setColor("GREEN")
 .setDescription(`

`)
 
 .addField(" TigerInLteX EĞLENCE KOMUTLARI ", `
\**a!aşkölçer :\** etiketlediğiniz kişiyle aranızdaki  aşkı ölçer
\**a!balık-tut :\** balık tutarsınız
\**a!doğruluk-cesaret :\** doğruluk ve cesaret oynarsnız
\**a!ters :\** yazdığınız yazıyı ters yazar
\**a!tkm :\** taş kağıt makas oynarsınız
\**a!yazı-tura :\** yazı tura oynarsınız
`)
 .setFooter("TigerInLteX | BOT", client.user.avatarURL) 
 message.channel.send(Embed)
 }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence-yardım'],
  permLevel: 0,
}

exports.help = {
      name: "eğlence"
  
}
