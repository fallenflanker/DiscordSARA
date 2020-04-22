const Discord = require('discord.js'); require('dotenv').config();
const bot = new Discord.Client();
const BOT_TOKEN = process.env.BOT_TOKEN;
const PREFIX = "/";
const replies = ["Hi! :3", "Heeey ;)","Hey Hey....","Hello There.","Howdy :)","Hello, how are you?","What's up?","Hi there.","Sup?", "Wassup?"] 
const replies1 = ["I'm great, how about you?","I'm good, you?","I'm alright wbu?","I'm fine thanks!","Doing alright, you?","I'm ok, you?","Could be better ;/, yourself?"]
const replies2 = ["Nothing much","Just chilling, wbu?","Just doing my thing ;), u know?","Doing some research, if you know what I mean","Kinda bored","Playing some games","Just hanging out"]
const replies3 = ["Good evening!","Evening"]
bot.on('ready', () =>{
   
    
    console.log('Sara is online!');


    bot.user.setActivity('Call of Duty: Warzone');

    bot.user.setActivity('Call of Duty: Warzone', 'https://www.twitch.tv/fear4thefallen');
    
}),




bot.on('message',(message)=>{


   if(message.author.bot) return;   
   if(message.content.toLowerCase() === '/listennn') {
    message.channel.send('bot is collecting messages now...');
    let filter = m => !m.author.bot;
    let collector = new Discord.MessageCollector(message.channel, filter);
    let destination = bot.channels.cache.get('414270268584886276');
    collector.on('collect', (m, col) =>{
        console.log("Collected message: " + m.content);
        if(destination) {
            if(m.content.toLowerCase() === '/stoppp' && (message.author.id === m.author.id)){
                console.log("Stopping Collector.");
                collector.stop();
            }
            else {
            destination.send(m.content);
            }
        }


    });
   }
   
   

   if(message.content.startsWith(PREFIX + "Hello") )
   {  message.replytext = Math.floor((Math.random() * replies.length) + 0); 
   message.reply(replies[message.replytext]); }
   
   if(message.content.startsWith(PREFIX + "How are you?") )
   {  message.replytext = Math.floor((Math.random() * replies1.length) + 0); 
   message.reply(replies1[message.replytext]); }
   
   if(message.content.startsWith(PREFIX + "What's up?") )
   {  message.replytext = Math.floor((Math.random() * replies2.length) + 0); 
   message.reply(replies2[message.replytext]); }
   
   if(message.content.startsWith(PREFIX + "Hi") )
   {  message.replytext = Math.floor((Math.random() * replies.length) + 0); 
   message.reply(replies[message.replytext]); }

   if(message.content.startsWith(PREFIX + "Good Evening") )
   {  message.replytext = Math.floor((Math.random() * replies3.length) + 0); 
   message.reply(replies3[message.replytext]); }

   if(message.content.startsWith(PREFIX + "How old are you?") )
   {  message.reply("I'm 36 years old.") }

   if(message.content.startsWith(PREFIX + "Tell me about yourself") )
   {  message.reply("My name's Sara Jean Underwood, I'm 36 years old and I live in Portland. I'm an actress, hostess and model.") }

   if(message.content.startsWith(PREFIX + "Rules") )
   {  message.reply("\n 1. Be respectful.\n 2. Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban.\n 3. No racial or political talk.\n 4. No spamming.\n 5. Post content in the correct channels.\n 6. Don't post someone's personal information without permission.\n 7. No pornography or graphic violence.\n 8. When using the !play command, make sure to include the author as well as the song name.\n 9. If you spot any of the above rules being disrespected please refer to one of the staff(Owner, Treasurer, Bouncer).\n 10. Enjoy the club ;)\n") }
   
   if(message.content.startsWith(PREFIX + "Roles") )
   {  message.reply("\n Owner = Created the server, The Boss.\n Treasurer = The mind behind everything, helps the owner solve delicate situations.\n Bounce = The muscles, enforces the rules and makes sure everything is safe. Owner's finest goon.\n Associates = Helped make this club what it is, long time members.\n Regulars = Regular customers.\n") }
   if(message.content.startsWith(PREFIX + "Delete")){
const args = message.content.split(' ').slice(1); 
const amount = args.join(' '); 
let author = message.member;


if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return msg.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

    message.channel.bulkDelete(args[0] // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
);
 
}



   
   }

  


),

bot.login(BOT_TOKEN)