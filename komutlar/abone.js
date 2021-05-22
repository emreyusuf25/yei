const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['811888420351639582'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bu komutu kullanmak için yetkin bulunmamakta.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  

const erkekrol = message.guild.roles.cache.find(r => r.id === '812249772215500830') //erkek rol id
const savelog = message.guild.channels.cache.find(c => c.id === '817462878918934598')//savelog id

if(!erkekrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Erkek rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
let name = args[1]
let age = Number(args[2])
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendine rol veremessin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bota rol veremessin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibine rol veremessin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`yetkili.${message.author.id}.kadin`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)


member.roles.add(erkekrol)




message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
<a:yuvarlak_tk:817718330147471421> rol verilen kullanıcı : ${member}

<a:dken:817060781283213332> verilen rol : ${erkekrol}

<a:yesl_ates:817060762982940703> rolü veren yetkili : ${message.author}
`)            
.setColor('#65d8c4'))

savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n• Kullanıcı: ${member} | \`${member.id}\`\n• Güncel İsim: \`${tag} ${name} | ${age}\`\n• Roller: ${erkekrol}, ${erkekrol2} \n• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n• Kayıtlar: \`${alldata}\` `)
.setColor('#65d8c4'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, yas: age, role: erkekrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['.a'], permLevel: 0}
exports.help = {name: 'abone', description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.", usage: '.abone @etiket/id'}