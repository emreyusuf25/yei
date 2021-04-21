const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(` **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Uyaracağın kişiyi etiketlemelisin!');
  if (reason.length < 1) return message.reply('Uyarma sebebini yazmadın!');
  if (user.id === message.author.id) return message.reply('Kendini uyaramazsın!');
  
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Uyarma')
  .addField('Uyarılan Kullanıcı', `${user.tag} (${user.id})`)
  .addField('Uyaran Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Uyarı Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  
  db.add(`uyarılar_${user.id}`, 1 )
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(` Kullanıcı Başarıyla **${reason}** sebebiyle uyarıldı`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyar'],
  permLevel: 3,
}

exports.help = {
      name: "uyar"
  
}