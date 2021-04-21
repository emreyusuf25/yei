const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':worried: **Gerekli izniniz bulunmuyor** :worried')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(` **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send(':no_entry_sign: **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin** :no_entry_sign:');
  if (reason.length < 1) return message.channel.send(' :no_entry_sign: **Kickleme Sebebinizi Giriniz** :no_entry_sign:');
  if (user.id === message.author.id) return message.channel.send(':man_facepalming: **Kendini Kickleyeceğine Kendin Çıksana ?**:man_facepalming:');

  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField(' İşlem', 'Sunucudan Kickleme')
  .addField(' Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField(' Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField(' Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(` **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kick'],
  permLevel: 0,
}

exports.help = {
      name: "at"
  
}

