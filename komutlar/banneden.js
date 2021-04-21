const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`:worried: **Bu komutu kullanabilmek için __Üyeleri Yasakla__ yetkisine sahip olmalısın.**:worried:`);

	if (!message.guild) return message.author.send(' **Bu Komutu Sunucuda Kulanabilirsiniz**');

    let kullanici = args[0];
    if (!kullanici) return message.channel.send(" **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(` **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('#FFD100')
.setAuthor('TigerInLteX | BOT', client.user.avatarURL())
.setDescription(` ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['ban-sorgu'],
        permLevel: 0,
      }
      
      exports.help = {
            name: "bansorgu"
        
      }


