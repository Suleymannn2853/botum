const Discord = require('discord.js');
const dragon = require("../ayarlar/bot.json");
const prefix = dragon.prefix
exports.run = function(client, message) {
const bot = new Discord.MessageEmbed()


.setColor('#FFFFFF')
.setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
.addField(`> <a:wumpus:802482585388974090> __Genel Komutlar__・\`${prefix}genel\`,true`)
.addField('Komut 2 - Açıklama')
.setThumbnail(client.user.avatarURL)
message.channel.send(bot)
};

exports.config = {
     name: 'suleyman',
     aliases: ['sususu']
}