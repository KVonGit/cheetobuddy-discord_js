const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('petcheeto')
        .setDescription('You pet Cheeto!'),
    async execute(interaction) {
        // Send a message into the channel where command was triggered from
        const cheetoResponses = ['smiles', 'purrs', 'rolls over', 'looks at you funny', 'moves just out of reach', 'falls asleep', 'farts', 'paws at you playfully', 'scratches you, but not too hard', 'is busy playing with someone under the door', 'lies down on your hand', 'goes to the litter box', 'goes and eats some food', 'walks away to have a little water', 'stands by the door, waiting to go out, looking at you upside-down', 'makes biscuits', 'loves you'];
        const random = cheetoResponses[Math.floor(Math.random() * cheetoResponses.length)];
        await interaction.reply({ content: 'Cheeto ' + random + '.', flags: 64 });
    },
};
