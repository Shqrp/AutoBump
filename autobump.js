const Discord = new require("discord.js");
const bot = new Discord.Client();
const config = new require("./config.json");
const TOKEN = config.token;

bot.login(TOKEN);

bot.on("message", function(message)
{

    if (message.content == 'ab!start'){

      message.channel.send("**Auto-bumping started! Next message in 120 minutes from now!**")  

      var interval = setInterval (function ()
            {
              message.channel.send("!b")
            }, 1200000);

      }

});
