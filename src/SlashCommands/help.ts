import { SlashCommandBuilder, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../types";


export const command: SlashCommand = {
    name: 'help',
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Liste des commandes"),
    async execute(interaction) {


        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Greet Boy")
                    .setURL("https://github.com/axe-fr/greet-bot")
                    .addFields(
                        { name: '`/greet`', value: "Ajouter un salon", inline:false },
                        { name: '`/ungreet`', value: "Supprimer un salon", inline:false },
                        { name: '`/clear-greet`', value: "Supprime tous les salons enregistrés", inline:false },
                    )
                    .setColor("Gold")
                    .setFooter({text:"GreetBot"})

            ]
           


            
        });


    
    }
}
