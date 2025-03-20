import { configDotenv } from "dotenv";
import { CommandKit } from "commandkit";
import { Client } from "discord.js";
import path from "path";

const bot = new Client({
  intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

new CommandKit({
  client: bot,
  bulkRegister: true,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
});

configDotenv();
bot.login(process.env.token);