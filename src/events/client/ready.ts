import { BotEvent } from "../../types";
import { Client, Events, WebhookClient } from "discord.js";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    async execute(client: Client) {
   
    console.log((`Connecté ${client.user?.tag}`))
    },
}

export default event;
