const Discord = new require("discord.js");
const bot = new Discord.Client();
const TOKEN = "NTQ0NjIwNzQwNjkxODg2MDkx.D09L4Q.cODCCQhPdF8IzxwczVSDIXyaISQ";

bot.login(TOKEN);

bot.on("message", function(message)
{

    if (message.content === 'ab!start'){

      message.channel.send("**Auto-bumping started! Next message in 20 minutes from now!**")  

      var interval = setInterval (function ()       
            
            {
              message.channel.send("!bump")
            }, 1200000);

      }

});