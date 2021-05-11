const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '=';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles =  fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready',() => {
    console.log('TawoBot is online!')
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'fanchant'){
        client.commands.get('fanchant').execute(message,args);
    } else if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'play' || 'p'){
        client.commands.get('play' || 'p').execute(message, args);
    } else if (command === 'leave' || 'dc'){
        client.commands.get('leave' || 'dc').execute(message, args);
    }       
});
client.login('ODQxNTE5Nzk1Njk3NDgzNzg4.YJn8YQ.4Dii1Bq5eUO6sngPtqVm5b_PkVs');