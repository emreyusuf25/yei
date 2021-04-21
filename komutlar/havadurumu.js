const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  

  
	if (!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription('Lütfen bir şehir belirtiniz')
    message.react('617145990742278144')
			.setColor("RANDOM")
		message.channel.send({embed})
		return
	}

	const konum = args.join(" ")
	message.channel.send("", {
		files: [
			`http://wttr.in/${konum}_0tqp_lang=tr}.png`
		]
	})
  message.react('617144473641680906')
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava-durumu'],
    permLevel: 0,
  }
  
  exports.help = {
        name: "hd"
    
  }