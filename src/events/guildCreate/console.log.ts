import type { CommandKit } from "commandkit";
import { Client, Guild } from "discord.js";

export default function (guild: Guild, bot: Client<true>) {
  console.log(`[${Date()}] LEFT SERVER [${bot.guilds.cache.size} | ${guild.name}]`);
};