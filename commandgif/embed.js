const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {

    
    
    let replies = ["سەرەتــــاکان هەر جوانــــنج کەســــت بینیـــوە ،،یەکــــسەر بڵـــێ من بێ ئەخـــلاقم...! حەەەەمە","من لەســـەر پەیـــمانم 🙂 تــۆ لەسەر کشـــی ئەو 😄💔! حەمە","نــامەوێ  بچیـــتە  دەرەوە  مرۆڤــی لێــــە (:","بیـــری  ناوم  دەکەم  بە دەنگـــــی تۆ","زۆر بیری  مەکە :)  چوونکە لەگەل کەسێکی ترە","ئەتــرسم  ڕۆژێـــك  لەگــەڵ  نەبوونت  ڕابێـــم  ،  تۆش  بتەوێ  بگەڕیتەوە","ڕۆژێـــك  خەمـــەکانمام  بۆ  دووژمنەکانمان دەگێرینەوە چوونکە دۆستە کانمان خیانەتیان کردووە دووژمنەکانمان ڕاستگۆ بوون","کە دڵ شکـا💔!                  داوای لێبووردن ،. گوو خواردنە","ئەتـــکەم بە  هیچــــەم...!🤍 بمکــــەی بە دووەم","لە هەموو شتێك  ڕاســت  بووم..!!✨        تانها لە خۆش ویستنی تۆ نەبێــــت","وەڵا ژیان  تەقلــــەی  پێـــلێــداین...!😂💔", "بێ تۆ هیچ شتێك تامی نەماوە ","ئەوەی  ئەمڕۆ  بۆتە دووژمنی گیانم..!:)      دوێنـــێ پێی ئەوتم هەموو گیانم ..!🤍✨",  "ئەوەی جاران لە دەڵم بوو 💔!  ئیستا  لەپێمدا جووتە 🎃!","ژیان فێری زۆر شتی کردم 🐰 بەس لە بیرم چۆوە..!!😐😂💔","چـــاوەکانت  داخە...... هم .... ئەوە ژیـــانی  منە بێـــــتۆ💔🙇🏽","سڵاو! خۆشمدەوێی! خوات لەگەڵ!💔😄","حاشـــا  کە پیـر بووم  ناڵێـــم...!!🤍  ناڵێم خۆزگــــەم بە گەنجیـــــم","سەیــــر کە  زۆرك هەن  حەسوودی بە جێگاکەت  ئەبەن بە تاڵی مەکە ...!♡︎","کاتێــــك ئازیزێـــکت  لەناکاو  دیار نامێنێ  خەمم  مەخۆ سوورشتی مرۆڤ وایە تا کاری پێتە لەگەڵتە :)","کـــە خیـــــانەت  ئاشکرا  بوو..! کا ڕسووا  بوویـــت..!!  گووی زیـــادە مەخۆ برۆ!💔🙂","کە گریــــنگ  نەمای بۆ  کەسێـــك!🐰  بە فرمێسکیش  بۆی بنووسە هەر تێناگات.....!😄🤍","من کەسێـــــکم ناوێ  خۆی  گەورەکا  لەسەرم 😄💔!"];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('<a:heartblack:996849798554599454>');
           });
          });
      }





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tk", "textkurdish", "kurd"],
  permLevel: 0
};

exports.help = {
  name: 'textkurdish',
  description: 'rexuss',
  usage: 'kurdish'
};
 

//MapXoor 
