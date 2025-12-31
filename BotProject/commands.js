import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTQ1NTkzNDIwNTA5ODg1NjQ1MA.Gj0zLN.zHY1HpmR-CptJWYZ2wvCM3OKbXv9DesO4WzThA");

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1455934205098856450"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
