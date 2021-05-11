module.exports = {
    name: 'ping',
    description: "Call TawoBot!",
    execute(message,args){

        let role = message.member.roles.cache.find(r => r.name === "Verified MRD48 Member");

        if(message.member.roles.cache.some(r => r.name === "Verified MRD48 Member")){
        message.channel.send("Tawo is Wota pong!");
        }
        else {
            message.channel.send('Cannot send message because you do not have the right permissions');
            message.member.roles.add(role).catch(console.error);

        }
    }
}