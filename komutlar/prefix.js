const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let a = ayarlar.prefix;
  let p = (await db.fetch(`prefix.${message.guild.id}`)) || ayarlar.prefix;
  let o = await db.fetch(`prefix.${message.guild.id}`);
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `:disappointed_relieved: **Bu Komutu Kullanabilmek İçin __Mesajları Yönet__ Yetkisine Sahip Olmalısınız** **Şuanki Prefix:** ${p}`
      )
    );

  if (args[0] === "ayarla") {
    if (o) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#050000")
          .setDescription(
            `**Ayarlanmış Şeyi Tekrar __Ayarlayamazsın__ | Şuanki Prefix:** ${p} Sıfırlamak İçin __${p}prefix__ sıfırla**`
          )
      );
    }
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#050000")
          .setDescription(
            `:smirk: **Bir Prefix Girip Tekrar Dene |  Şuanki Prefix:** ${p}`
          )
      );
    db.set(`prefix.${message.guild.id}`, args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#050000")
        .setDescription(
          `:ok_hand:  **Prefix Başarıyla Ayarlandı | Şuanki Prefix:** ${
            args[1]
          }`
        )
    );
  }
  if (args[0] === "sıfırla") {
    if (!o) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#050000")
          .setDescription(
            `:sweat_smile: **Ayarlanmayan Prefixi Sıfırlayamazsınız | Şuanki Prefix:** ${p}`
          )
      );
    }
    db.delete(`prefix.${message.guild.id}`);
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#050000")
        .setDescription(
          `:ok_hand: **Prefix Başarıyla Sıfırlandı | Şuanki Prefix:** ${a}`
        )
    );
  }

  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#050000")
        .setDescription(
          `**Prefix Ayarlamak İçin** ${p}**prefix ayarla <prefix>**\n**Sıfırlamak İçin** ${p}**prefix sıfırla | Şuanki Prefix:** \`${p}\``
        )
    );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix'],
  permLevel: 4,
}

exports.help = {
      name: "prf"
  
}