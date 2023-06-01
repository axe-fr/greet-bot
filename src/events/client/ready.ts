import { BotEvent } from "../../types";
import { Client, Events, WebhookClient } from "discord.js";

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    async execute(client: Client) {
    const webhook = new WebhookClient({id:"1112068712791552061", token:"vGP2IT-ORnbkBOP5metNIjIT_TBrwwVljaBh9pDOSwediSDUF5qL5VWvOsGcptMcGax5"});

    webhook.send({content:`\`${client.user.username}\` est connecté.`})


    console.log((`Connecté ${client.user?.tag}`))
    },
}

export default event;