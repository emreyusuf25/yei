const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {

  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTimestamp()
    .setDescription(`**Botun Sahibi** <@746439920033333299>

   **Botun Gelistiricisi** <@746439920033333299>

   **Bellek:** ${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2)}MB

   **Bot aktiflik süresi** ${seksizaman}

   **Toplam Sunucu:** ${client.guilds.cache.size.toLocaleString()}

   **Toplam Kullanıcı:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}

   **Toplam Kanal:** ${client.channels.cache.size.toLocaleString()}

   **Gecikmeler:** ${client.ws.ping}

   **Discord.js Sürümü:** v${Discord.version}

   **Node.js Sürümü:** ${process.version}

   **işemci;** \`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\`

   **Bit:** \`${os.arch()}\`
   
   **Davet:** [Tıkla](https://discordapp.com/oauth2/authorize?client_id=` + client.user.id + `&scope=bot&permissions=8)`)

    .setFooter(client.user.username, client.user.avatarURL())
    .setImage(`https://i.hizliresim.com/yMSCH1.gif`)
  return message.channel.send(istatistikler);
};

exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['istatistik'],
      permLevel: 5,
    }
    
    exports.help = {
          name: "ista"
      
    }