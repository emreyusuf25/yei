const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar/ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.roles.add('811895854864269324'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG



//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     STG

client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:0_:817054607800139817>`,
            '1': `<a:1_:817054601378791434>`,
            '2': `<a:2_:817054616063442955>`,
            '3': `<a:3_:817054618608468029>`,
            '4': `<a:4_:817054617896484875>`,
            '5': `<a:5_:817054618604535859>`,
            '6': `<a:6_:817054618780434502>`,
            '7': `<a:7_:817054620173074443>`,
            '8': `<a:8_:817054619439464460>`,
            '9': `<a:9_:817054620042919946>`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "811886132903936002");//mesaj atılcak kanal id
      let register = '811888420351639582'
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = 'DİKKATTTT <a:uyar:735469859382624286> Hesap Durumu: Güvenilir Değil.'
  if (kurulus > 1296000000) kontrol = '<a:yuvarlak_tk:817059580273098764> Hesap Durumu: Güvenilir Gözüküyor.'
    moment.locale("tr");
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.guild.name, member.guild.iconURL({dynamic:true}))
  .setDescription(`
  <a:zill:817061296317923348> TigerınlTeX sunucumuza hoşgeldin <@`+member.id+`>

  `+kontrol+`
  
  <a:yuklenyorr:817059736771100752> Kayıt olmak için ismini ve yaşını yazıp <@&811888420351639582> beklemen yeterlidir. <@&811888420351639582> sizinle ilgilenecektir
  
  <a:dken:817059635122143283> Seninle birlikte `+üyesayısı+` üye'e ulaştık
  
  <a:uyar:735469859382624286> Sunucumuzun kurallarına uymayı unutma

  <a:yesl_ates:817059700407271504> Sunucumuzun gelişmesi için arkadaşlarını davet edebilirsin ve oyun odalarımızda online oyunları sesli bir şekilde oynayabilirsin
`)
  .setImage(`https://cdn.glitch.com/0ba8c514-4a2c-46f2-bf66-d04c801e72fd%2FpUkzWu.gif?v=1619420178209`)
  kanal.send(embed)
  kanal.send(`<@&811888420351639582> <@`+member.id+`> Kişisinin `+kontrol+``)
});
//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     STG


//------------------------ŞÜPHELİ-HESAP-----------------------\\     STG

client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
    const kytsz = member.guild.roles.cache.find(r => r.id === "811895854864269324") 
     var rol = member.guild.roles.cache.get("836864377881624607") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
     var kayıtsız = member.guild.roles.cache.get(kytsz) // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
     member.roles.add(rol)
     member.roles.remove(kytsz)


    
     setTimeout(() => {
     
     }, 1000)
     
     
        }
             else {
     
             }
      });

//------------------------ŞÜPHELİ-HESAP-----------------------\\     STG






 client.login(ayarlar.token)

 client.on("ready", () => {
    client.channels.cache.get("817279420909092884").join()
    })