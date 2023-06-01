import { SlashCommandBuilder } from "discord.js"
import { SlashCommand } from "../types";
import db  from "quick.db"


export const command: SlashCommand = {
    name: 'clear-greet',
    data: new SlashCommandBuilder()
        .setName('clear-greet')
        .setDescription("Retire tous les salons greet"),
    async execute(interaction) {
        if (!interaction.memberPermissions.has("Administrator")) {
            interaction.reply({ content:"Tu n'as pas la permission d'Administrateur" , ephemeral:true }); 
            } else if(interaction.memberPermissions.has("Administrator")) {
                
                const greet =interaction.guild.channels.cache.filter(c => db.get(`greet_${interaction.guild.id}_${c.id}`) === c.id).map(a => db.delete(`greet_${interaction.guild.id}_${a.id}`))
                await interaction.reply(`Tous les salons greet ont été supprimés (\`${greet.length} salons \`)`)


    
}
} 
}

