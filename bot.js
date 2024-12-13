require('dotenv').config();
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'info') {
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('option1')
                    .setLabel('Quests')
                    .setEmoji('<:Quests:1317222007007612959>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('option2')
                    .setLabel('Secret Rares')
                    .setEmoji('<:SecretRares:1317222004251820142>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('option3')
                    .setLabel('Treasure Hunts')
                    .setEmoji('<:treasure_casket:1317214779408126042>')
                    .setStyle(ButtonStyle.Primary)
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('option4')
                    .setLabel('Equipment')
                    .setEmoji('<:Equipment:1317222002129502319>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('option5')
                    .setLabel('Base Camp')
                    .setEmoji('<:BaseCamp:1317222000900702208>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('option6')
                    .setLabel('Market Trader')
                    .setEmoji('<:MarketTrader:1317221999344357527>')
                    .setStyle(ButtonStyle.Primary)
            );
        await interaction.reply({ content: 'Welcome to Cherry Tree! Choose an option:', components: [row1, row2] });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    switch (interaction.customId) {
        case 'option1':
            await interaction.reply('You chose Quests!');
            break;
        case 'option2':
            await interaction.reply('You chose Secret Rares!');
            break;
        case 'option3':
            await interaction.reply('You chose Treasure Hunts!');
            break;
        case 'option4':
            await interaction.reply('You chose Equipment!');
            break;
        case 'option5':
            await interaction.reply('You chose Base Camp!');
            break;
        case 'option6':
            await interaction.reply('You chose Market Trader!');
            break;
        default:
            await interaction.reply('Unknown option!');
    }
});

client.login(process.env.DISCORD_TOKEN);