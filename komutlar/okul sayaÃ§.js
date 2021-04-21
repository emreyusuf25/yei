const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2021-06-19 16:00:00')
    let zaman = ms(okul - Date.now())

    message.channel.send(`okulun kapanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['okul-sayaç'],
  permLevel: 0,
}

exports.help = {
      name: "os"
  
}