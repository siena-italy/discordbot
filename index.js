const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '='
const got = require('got');



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log(`--------------------------------------------`);
  client.user.setActivity(`The more you know, the more you realize you know nothing. -Socrates`);
})


// https://github.com/VEEGISHx/Alexi5/blob/master/src/commands/fun/meme.js
function meme(msg) {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/catlinmemes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
        msg.channel.send(embed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        console.log('Bot responded with: ' + memeImage);
    }).catch(console.error);
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


var stevequotes = [
  "Plug in your chromebook -Steven Michael Pape, 2019",
  "If you keep the commons clean, maybe you can eat at assemblies -Steven Michael Pape, 2019",
  "Is that a phone is your pocket? -Steven Michael Pape, 2019",
  "I'll bring donuts for c&c -Steven Michael Pape, 2019",
  "My name is Dr. Roboto -Steven Michael Pape to some random 6th grader",
  "I wish there was something I could do -Steven Michael Pape when asked to do literally anything",
  "I don't make up the rules, I just enforce them -Steven Michael Pape, making up the rules",
  "Please put your chromebooks in the correct slot -Steve Pape, 2019",
  "Hello, have you plugged in your chromebook? -Steve Pape, 2019",
  "This is the third time you've left your chromebook out... should we brainstorm a plan to fix that? -Steve Pape, 2019",
  "Your chromebook is in my office. -Steve Pape, 2019",
  "Did you plug in your chromebook? -Steve Pape, 2019",
  "What is that on your other tab? -Steve Pape, 2019",
  "We have GREAT news! *pauses dramatically*... Everyone's chromebook was plugged in! -Steve Pape, 2020",
  "Who's Steve? - Steven Michael Pape pretending to be Dr. Roboto to any sixth grader.",
  "Beards are cool!",
  "Come see me in my office - Steven Michael Pape when he has (stolen) your chromebook."
]

var dalequotes = [
  "I know you two like each other but you need to focus -Dale rawls",
  "Thats cooler than cats feet -Dale Rawls",
  "I will give you each one sheet of italian shading paper. It's very expensive. -Dale Rawls",
  "Paper is cheap but good ideas are hard to come by. -Dale Rawls"
]

var rankres = [
  "Stop bragging",
  "Chill",
  "https://visicomservices.com/images/easyblog_images/4072/b2ap3_thumbnail_stop_wasting_time_400.jpg",
  "You dont need to check your rank this frequently, and I'm saying this because I'm Steve and I am a nosy bot. A very nosy bot."
]


var quotes = [stevequotes, dalequotes]

//commands
client.on("message", msg => {
//  let command = msg.content

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();


  //steve quoter 2000
  if (command === ("quotes")) {
    msg.channel.send("Steve's quotes:")
    msg.channel.send(stevequotes)
    msg.channel.send("Dale's quotes:")
    msg.channel.send(dalequotes)
  }
  if (command === ("quotes-raw")) {
    msg.channel.send(quotes)
  }

  if (command === "status") {
    msg.channel.send("Operational")
    console.log(msg.author)
    console.log(msg.author.username)

  }

  if (command === ("steve")) {
    msg.reply(stevequotes[Math.floor(Math.random() * stevequotes.length)])
  }

  if (command === ("quote")) {
    msg.channel.send(stevequotes[Math.floor(Math.random() * stevequotes.length)])
  }

  if (command === ("commands")) {
    msg.channel.send("Try commands like 'steve', 'quote', 'lecture', 'dale', 'repeat', 'roll', and 'meme. 
                     "None of these commands are very interesting yet, so complain to Kaz if you feel unsatisfied.")
  }

  if (command.startsWith("help")) {
    msg.reply("Hi, I'm Steve the bot (not to be confused with Steve the human) and I'm here to moderate this server. If you have any questions, feel free to @kaz and ask him (he is my developer). If you would like to contrubute, great! I am open source at https://github.com/KazMalhotra/discordbot.")
  }

  if (command.startsWith("lecture")) {

    msg.reply("Hi, I'm Steve and I'm here to lecture you ha! There are like three things you must know: 1. Plug your chromebook in. 2. Plug your chromebook. 3. Plug in your chromebook. Alright, the lecture is over. This one was rather short, for your benefit. Please @kaz if you would like a longer lecture.")
  }


  if (command === ("dale")) {

    msg.reply(dalequotes[Math.floor(Math.random() * dalequotes.length)])
  }

  if (command === ("quotes-dale")) {
    msg.reply(dalequotes)
  }

  if (command.startsWith("points")) {
    if (!args.length) {
      return msg.channel.send("Please provide arguments", msg.author);
    }
    msg.channel.send(`User ${args[0]} has ${points[args[0]]} points`)

  }

  if (command === 'args') {
    if (!args.length) {
      return msg.channel.send("Please provide arguments", msg.author);
    }
    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

  if (command === 'repeat') {
    if (!args.length) {
      msg.channel.send("What should I repeat", msg.author);
    }
    msg.channel.send(args);
  }

  if (command === 'roll') {
    if (!args.length) {
      msg.channel.send(Math.floor(Math.random() * 6 + 1))
    }
    else {
    msg.channel.send(Math.floor(Math.random() * args[0] + 1))

    }
  }
  if (command == 'meme') {
    meme(msg);
  }

})


//other random stuff
client.on("message", msg => {

  if (msg.content === "-cat" || msg.content === "-CatFact" || msg.content === "-catfacts" || msg.content === "-dog" || msg.content === "-cf") {
    sleep(200)
    msg.reply("citation needed")
    msg.reply("https://imgs.xkcd.com/comics/wikipedian_protester.png")
  }

  if (msg.content.startsWith("!rank")) {
    sleep(200)
    msg.channel.send(rankres[Math.floor(Math.random() * rankres.length)])
  }


})




//login
var token = process.env.TOKEN;
client.login(token)
