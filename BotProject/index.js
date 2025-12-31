const {Client,GatewayIntentBits}=require('discord.js')
const client=new Client(
    {
        intents:[GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]});

client.on('messageCreate',message=>{
   if(message.author.bot)return;
   message.reply({
    content: "Hi there! How can I assist you today?"
   });
});

client.on('interactionCreate',interaction=>{
  console.log(interaction);

interaction.reply('pong')
});

client.login("MTQ1NTkzNDIwNTA5ODg1NjQ1MA.Gj0zLN.zHY1HpmR-CptJWYZ2wvCM3OKbXv9DesO4WzThA");