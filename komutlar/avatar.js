const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let kişicikabi = message.mentions.users.first() || message.author;
  let avatar = new Discord.MessageEmbed()
    .setImage(kişicikabi.avatarURL())
    .setFooter(`${message.author.username} tarafından istendi`);

  message.channel.send(avatar);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0,
}

exports.help = {
      name: "avatar"
  
}