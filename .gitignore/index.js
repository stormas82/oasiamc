/* start */

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
    bot.user.setGame('Play.OasiaMc.Fr')
    console.log("Le bot a bien etait connécté")
})

bot.login("NTgwNDk0NzM0NzQxNDcxMjQ5.XORjsA.JJMynST76QQq6__sp-EAvvJzkjM");

/* commandes */

bot.on('message', function (message) {
    if (message.content === '/yt') {
        message.channel.sendMessage('🌵OasiaMc🌵 \n \n :palm_tree:Grade Youtuber: \n \n - 150 vues minimum sur une vidéo sur serveur \n- 250 abonnés minimum \n \n :palm_tree:Grade Youtuber+: \n \n - 500 vues minimum sur une vidéo sur serveur \n - 100 abonnés minimum \n \n :cactus:OasiaMc:cactus:')
    }
})

bot.on('message', function (message) {
    if (message.content === '/youtube') {
        message.channel.sendMessage('🌵OasiaMc🌵 \n \n :palm_tree:Grade Youtuber: \n \n - 150 vues minimum sur une vidéo sur serveur \n- 250 abonnés minimum \n \n :palm_tree:Grade Youtuber+: \n \n - 500 vues minimum sur une vidéo sur serveur \n - 100 abonnés minimum \n \n :cactus:OasiaMc:cactus:')
    }
})

bot.on('message', function (message) {
    if (message.content === '/site') {
        message.channel.sendMessage(':palm_tree:OasiaMc \n \n Notre site internet: @OasiaMc.fr \n \n :palm_tree:OasiaMc')
    }
})
