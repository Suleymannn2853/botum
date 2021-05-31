const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const timezaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const betastats = new Discord.MessageEmbed()
  .setColor(0x36393E)
    .setImage("")
    .setTimestamp()
    .addField("**Botun Sahibi**", "<@780135880542650390>")
    .addField(" **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField(" **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(" **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField(" **Çalışma süresi**", timezaman, true)
    .addField(" **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField(" **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField(" **Node.JS sürüm**", `${process.version}`, true)
    .addField("** Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(betastats);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};