const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let guild = message.guild;

  guild
    .fetchBans()
    .then(lrowsbans =>
      message.channel.send(
        `Sunucunuzda **${lrowsbans.size}** Banlanmış Üye Bulunmaktadır.`
      )
    )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban-say'],
  permLevel: 0,
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bansay'],
  permLevel: 0,
}

exports.help = {
      name: "bs"
  
}