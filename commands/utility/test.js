const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('TEST PET_CHEETO'),
    async execute(interaction) {
        // Send a private reply
        await interaction.reply({ content: 'Cheeto smiles.', flags: 64 });
    },
};
