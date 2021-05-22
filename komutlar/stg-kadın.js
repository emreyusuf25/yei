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
  
const tag = ''   
const kadınrol = message.guild.roles.cache.find(r => r.id === '811889820405465108') //kadın rol id
const kadınrol2 = message.guild.roles.cache.find(r => r.id === '811890114711388160')//kadın rol2 id
const kayıtsız = message.guild.roles.cache.find(r => r.id === '811895854864269324')//kayıtsız rol id
const genelchat = message.guild.channels.cache.find(c => c.id === '812299218709905418')//genel chat id
const savelog = message.guild.channels.cache.find(c => c.id === '815623954726387712')//savelog id

if(!kadınrol) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`1. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!kadınrol2) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`2. Kadın rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!kayıtsız) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kayıtsız rolü ayarlanmamış/yanlış id girilmiş kayıt işlemine devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`${message.author} bir kullanıcı belirt.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir isim belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(!age) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bir yaş belirtmelisin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.author.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Kendini kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === client.user.id) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Bot kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Sunucu sahibini kayıt edemezsin.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda işleme devam edilemiyor.`)
.setColor('#a22a2a')).then(x => x.delete({timeout: 5000}));
  
  
datab.add(`yetkili.${message.author.id}.kadin`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${tag} ${name} | ${age}`)
member.roles.add(kadınrol)
member.roles.add(kadınrol2)
member.roles.remove(kayıtsız)


message.channel.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`
<a:yuvarlak_tk:817718330147471421> kayıt edilen kullanıcı : ${member}

<a:dken:817060781283213332> verilen rol : ${kadınrol},${kadınrol2}

<a:yuklenyorr:817060720276537385> yeni isim yaş : ${tag} ${name} | ${age}

<a:yldz~1:817060744779923507> kayıt eden yetkili : ${message.author}

<a:yesl_ates:817060762982940703> yetkilinin kayıt sayısı : ${alldata}
`)            
.setColor('#65d8c4'))
  
genelchat.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`
<a:Zil:817061131277303808> ${member} aramıza ${kadınrol},${kadınrol2} rolleri ile katıldı

<a:yuvarlak_tk:817718330147471421> kayıt eden yetkili ${message.author}

<a:yesl_ates:817060762982940703> aramıza hoşgeldin ${member}

<a:uyar:817079766267199518> <#&811949040626565122> okumayı unutma iyi eğlenceler 
`)
.setColor('#65d8c4'))
  
savelog.send(new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`• Yetkili: ${message.author} | \`${message.author.id}\`\n• Kullanıcı: ${member} | \`${member.id}\`\n• Güncel İsim: \`${tag} ${name} | ${age}\`\n• Roller: ${kadınrol}, ${kadınrol2} \n• Kanal: <#${message.channel.id}> | \`${message.channel.id}\`\n• Kayıtlar: \`${alldata}\` `)
.setColor('#ba61dd'))


datab.push(`isim.${message.guild.id}`, {userID: member.id, isim: name, yas: age, role: kadınrol.id})}
exports.conf = {enabled: true, guildOnly: true, aliases: ['kadın', 'k', 'girl', 'woman', 'kız'], permLevel: 0}
exports.help = {name: 'kadın', description: "Etiketlenen kişiyi kadın rolleriyle kayıt eder.", usage: '.kadın @etiket/id İsim Yaş'}