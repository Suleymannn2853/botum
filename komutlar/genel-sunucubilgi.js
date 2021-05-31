const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');
const moment = require('moment');
moment.locale('tr');

exports.run = async (client, message, args) => {
 
let sunucubölge = {
        "us-central": "Amerika :flag_us:",
        "us-east": "Doğu Amerika :flag_us:",
        "us-south": "Güney Amerika :flag_us:",
        "us-west": "Batı Amerika :flag_us:",
        "eu-west": "Batı Avrupa :flag_eu:",
        "eu-central": "Orta Avrupa :flag_eu:",
        "europe": "Avrupa :flag_eu:",
        "singapore": "Singapur :flag_sg:",
        "london": "Londra :flag_gb:",
        "japan": "Japonya :flag_jp:",
        "russia": "Rusya :flag_ru:",
        "hongkong": "Hong Kong :flag_hk:",
        "brazil": "Brezilya :flag_br:",
        "singapore": "Singapur :flag_sg:",
        "sydney": "Sidney :flag_au:",
        "india": "Hindistan :flag_in:",
        "dubai": "Dubai :flag_ae:",
        "amsterdam": "Amsterdam :flag_nl:",
        "frankfurt": "Frankfurt :flag_de:",
        "southafrica": "Güney Afrika :flag_za:"
    }
    

const botlar = message.guild.members.cache.filter(m => m.user.bot).map(bots => `${bots}`).splice(0, 10).join(' ')

const roller = message.guild.roles.cache.filter(a => a.name !== 'everyone' && !a.managed).sort((a, b) => a.position - b.position).map(c => c).reverse().splice(0, 10).join(' ')

let emoji = message.guild.emojis.cache.map(emo => `${emo}`).splice(0, 10).join(' ')

 const embed = new Discord.MessageEmbed()
.setColor('#FFFFFF')
.setAuthor('Sunucu Bilgi',message.guild.iconURL({ dynamic:true }))
.addField('Sunucu İsmi',`${message.guild.name} \`(${message.guild.id})\``,true)
.addField('Sunucu Sahibi',`<@${message.guild.owner.id}> \`(${message.guild.owner.id})\``,true)
.addField('Oluşturulma Tarihi',`${moment(message.guild.createdAt).format('D MMMM YYYY | HH:MM:SS')}`,true)
.addField('Sunucu Bölgesi',sunucubölge[message.guild.region],true)
.addField('Boost Bilgileri',`${message.guild.premiumTier} Boost | ${message.guild.premiumSubscriptionCount} Seviye`,true)
.addField('Kullanıcılar',`${message.guild.members.cache.filter(m => m.user.presence.status != 'offline').size} / ${message.guild.members.cache.size} Çevrimiçi`,true)
.addField('Kanallar',`${message.guild.channels.cache.size} Toplam (${message.guild.channels.cache.filter(ch => ch.type == 'category').size} Kategori / ${message.guild.channels.cache.filter(ch => ch.type == 'text').size} Yazı / ${message.guild.channels.cache.filter(ch => ch.type == 'voice').size} Sesli)`)
.addField(`Botlar [${message.guild.members.cache.filter(m => m.user.bot).size}]`,botlar ? botlar : 'Botlar Listelenemedi')
.addField(`Roller [${message.guild.roles.cache.size-1}]`,roller ? roller : 'Hiç Rol Bulunmuyor!')
.addField(`Emojiler [${message.guild.emojis.cache.size}]`,emoji ? emoji: 'Emoji Yok')
message.channel.send(embed) 

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucubilgi"],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-bilgi'
};