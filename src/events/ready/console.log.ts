import type { CommandKit } from "commandkit";
import type { Client } from "discord.js";

export default function (bot: Client<true>, handler: CommandKit) {
  console.log(`[${Date()}] ${bot.user.username} IS IN MOTION AT ${bot.ws.ping}MS`);
};