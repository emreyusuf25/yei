const draje = require("discord.js");
exports.run = async (client, message, args) => {
  const ayarlar = require("../ayarlar/bot.json");
  const onay = "#00ff35";
  const red = "#ff0000";
  let prefix =
    (await require("quick.db").fetch(`prefix.${message.guild.id}`)) ||
    ayarlar.prefix;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      new draje.MessageEmbed()
        .setDescription(
          "Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın."
        )
        .setColor(red)
    );
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  var role =
    message.mentions.roles.first() ||
    message.guild.roles.cache.find(a => a.name == args.slice(1).join(" "));
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "**Bu komutu kullanabilmek için __Rolleri Yönet__ yetkisine sahip olmalısın.**"
    );
  if (!member)
    return message.channel.send("**Lütfen bir kullanıcıyı etiketleyin.**");
  if (!role) return message.channel.send(" Rol bulunamadı.");
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
    return message.channel.send(
      `Verilecek rol sizin rolünüzün üstünde bu yüzden rolü **veremiyorum!**`
    );
  }
  try {
    await member.roles.add(role.id);
    message.channel.send(
      new draje.MessageEmbed()
        .setDescription(
          `** ${member} isimli üyeye __${role.name}__ isimli rol başarıyla verildi! **`
        )
        .setFooter(
          "**Bu komutu kullanan yetkili**" + message.author.tag,
          message.author.avatarURL
        )
        .setColor(onay)
    );
  } catch (e) {
    console.log(e);
    message.channel.send("**Hata oluştu!**");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-ver'],
  permLevel: 3,
}

exports.help = {
      name: "rv"
  
}