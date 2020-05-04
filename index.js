const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = '='

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

var points = {
  "@Kaz": "10"

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
  "I don't make up the rules, I just enforce them -Steven Michael Pape, making up the rules"
]

var dalequotes = [
  "I know you two like each other but you need to focus -Dale rawls",
  "Thats cooler than cats feet -Dale Rawls",
  "I will give you each one sheet of italian shading paper. It's very expensive. -Dale Rawls",
  "Paper is cheap but good ideas are hard to come by. -Dale Rawls"
]


var quotes = [stevequotes, dalequotes]

//commands
client.on("message", msg => {
//  let command = msg.content

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

//  stop if '=' is not there or if the author of the message is a bot
//  if (!command.startsWith(prefix) || msg.author.bot) return;


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

  }

  if (command === ("steve")) {
    msg.reply(stevequotes[Math.floor(Math.random() * stevequotes.length)])
  }

  if (command === ("quote")) {
    msg.channel.send(stevequotes[Math.floor(Math.random() * stevequotes.length)])
  }

  if (command.startsWith("help")) {
    msg.reply("Hi, I'm Steve the bot (not to be confused with Steve the human) and I'm here to moderate this server. If you have any questions, feel free to @Kaz and ask him (he is my developer). If you would like to contrubute, great! I am open source at https://github.com/KazMalhotra/discordbot.")
  }

  if (command.startsWith("lecture")) {

    msg.reply("Hi, I'm Steve")
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
    msg.channel.send(`User ${args} has ${points[args]} points`)

  }

  if (command === 'args') {
    if (!args.length) {
      return msg.channel.send("Please provide arguments", msg.author);
    }
    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

})


//other random stuff
client.on("message", msg => {

  if (msg.content === "-cat" || msg.content === "-CatFact" || msg.content === "-catfacts" || msg.content === "-dog" || msg.content === "-cf") {
    sleep(200)
    msg.reply("citation needed")
    msg.reply("https://imgs.xkcd.com/comics/wikipedian_protester.png")
  }
/*
  if (msg.content.startsWith("sowwy")) {
    sleep(200)
    msg.reply(`You mean sorry?`)
  }
*/

  if (msg.content === "!rank") {
    sleep(200)
    msg.channel.send(`${msg.author} should chill`)
  }
})

var token = process.env.TOKEN;
client.login(token)
