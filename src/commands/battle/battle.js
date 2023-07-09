const { Client, Interaction, EmbedBuilder } = require('discord.js')

module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: async (client, interaction) => {
        // You can change all of these parameters
        const python = {
            name: 'Python',
            hp: 1000,
            maxHp: 1000,
            awaitHp: 1000,
            def: 30,
            atk: 50,
            awaitDmg: [],
        }
        const javascript = {
            name: 'JavaScript',
            hp: 900,
            maxHp: 900,
            awaitHp: 900,
            def: 20,
            atk: 100,
            awaitDmg: [],
        }
        // End of the parameters

        let i = 1 // Timeout await duration, each attack turn increase by 1.5s
        let turns = 1 // Turns number

        await interaction.deferReply()
        await interaction.editReply({
            content: null,
            embeds: [
                new EmbedBuilder()
                    .setColor('Purple')
                    .setTitle("Discord.js Turn-based Demo")
                    .addFields(
                        { name: `Waiting for battle start...`, value: 'Python vs JavaScript'},
                    )
                    .setImage('https://1.bp.blogspot.com/-sd4T7ClIXO0/X_G3pLu1yjI/AAAAAAAAlXs/aDcsKH4a9Hwk-p4ZyIVzWnoW9gXVYHqYgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Python%2Bvs%2BJavaScript%2Bwhich%2Bis%2Bbetter%2Bto%2Blearn%2BCoding%2Bfor%2Bbeginners.png')
            ],
            components: []
        })

        while (python.hp > 0 && javascript.hp > 0) {
            let damage = python.atk - javascript.def
            python.awaitDmg.push(damage)
            javascript.hp -= damage

            setTimeout(async () => {
                javascript.awaitHp -= python.awaitDmg[turns-1]

                await interaction.editReply({
                    content: null,
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Purple')
                            .setTitle("Discord.js Turn-based Demo")
                            .addFields(
                                { name: `**[Turn ${turns}]**`, value: `**Python** attack *JavaScript* with **${python.awaitDmg[turns-1]}** damage!`},
                                { name: `__${python.name}__`, value: `${Math.max(python.awaitHp, 0)} / ${python.maxHp}`, inline: true },
                                { name: `__${javascript.name}__`, value: `${Math.max(javascript.awaitHp, 0)} / ${javascript.maxHp}`, inline: true },
                                )
                            .setImage('https://1.bp.blogspot.com/-sd4T7ClIXO0/X_G3pLu1yjI/AAAAAAAAlXs/aDcsKH4a9Hwk-p4ZyIVzWnoW9gXVYHqYgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Python%2Bvs%2BJavaScript%2Bwhich%2Bis%2Bbetter%2Bto%2Blearn%2BCoding%2Bfor%2Bbeginners.png')
                    ],
                    components: []
                });
            }, i * 1000)
            i += 1.5

            if (javascript.hp > 0 && python.hp > 0) {
                let damage = javascript.atk - python.def
                javascript.awaitDmg.push(damage)
                python.hp -= damage

                setTimeout(async () => {
                    python.awaitHp -= javascript.awaitDmg[turns-1]

                    await interaction.editReply({
                        content: null,
                        embeds: [
                            new EmbedBuilder()
                                .setColor('Purple')
                                .setTitle("Discord.js Turn-based Demo")
                                .addFields(
                                    { name: `**[Turn ${turns}]**`, value: `**JavaScript** attack *Python* with **${javascript.awaitDmg[turns-1]}** damage!`},
                                    { name: `__${python.name}__`, value: `${Math.max(python.awaitHp, 0)} / ${python.maxHp}`, inline: true },
                                    { name: `__${javascript.name}__`, value: `${Math.max(javascript.awaitHp, 0)} / ${javascript.maxHp}`, inline: true },
                                )
                                .setImage('https://1.bp.blogspot.com/-sd4T7ClIXO0/X_G3pLu1yjI/AAAAAAAAlXs/aDcsKH4a9Hwk-p4ZyIVzWnoW9gXVYHqYgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Python%2Bvs%2BJavaScript%2Bwhich%2Bis%2Bbetter%2Bto%2Blearn%2BCoding%2Bfor%2Bbeginners.png')
                        ],
                        components: []
                    });

                    turns++
                }, i * 1000)
            }
            i += 1.5

            if (python.hp <= 0 || javascript.hp <= 0) {
                let message = python.hp <= 0 ? '**JavaScript** Wins!' : '**Python** Wins!'

                setTimeout(async () => {
                    await interaction.editReply({
                        content: null,
                        embeds: [
                            new EmbedBuilder()
                                .setColor('Purple')
                                .setTitle("Discord.js Turn-based Demo")
                                .addFields(
                                    { name: `Battle Finished!`, value: `${message}`},
                                )
                                .setImage('https://1.bp.blogspot.com/-sd4T7ClIXO0/X_G3pLu1yjI/AAAAAAAAlXs/aDcsKH4a9Hwk-p4ZyIVzWnoW9gXVYHqYgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Python%2Bvs%2BJavaScript%2Bwhich%2Bis%2Bbetter%2Bto%2Blearn%2BCoding%2Bfor%2Bbeginners.png')
                        ],
                        components: []
                    });
                }, i * 1000)
            }
        }


    },
    name: 'battle',
    description: 'Turn-based battle sample.',
}