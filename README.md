# Discord.js-Turn-based-RPG

![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/ndy-s/Discord.js-Turn-based-RPG)
![GitHub stars](https://img.shields.io/github/stars/ndy-s/Discord.js-Turn-based-RPG?style=social)
![GitHub forks](https://img.shields.io/github/forks/ndy-s/Discord.js-Turn-based-RPG?style=social)

This repository provides a basic implementation for a turn-based RPG (role-playing game) using the Discord.js library. The project focuses on simplicity, providing a basic introduction to the implementation.

## Getting Started
The project consists of a single branch `main` which contains the complete code for the implementation. Please note that additional branches may be added in the future to support ongoing development and new features. To get started with the project, you can clone the repository to your local machine using the following command:
```
git clone https://github.com/Ndy-S/Discord.js-Turn-based-RPG.git
```

After replicating the project, there are additional setup steps you need to follow:
1. Set up your own Discord Bot Application on the <a href="https://discord.com/developers/applications">Discord Developer Portal</a>. You can refer to tutorials like <a href="https://youtu.be/qv24S2L1N0k">this one</a> for guidance on setting up your bot application.
2. After completing the setup, you need to add two files to the project: `.env` and `config.json`. These files will contain essential configuration information.

Example `.env` file:
```
TOKEN = your-discord-bot-token
```

Example `config.json` file:
```
{
  "clientId": "your-discord-bot-client-id",
  "devs": [
    "your-discord-user-id"
  ]
}
```

### Project Structure
The structure of the project may vary depending on its size and complexity. I personally use the following structure for the project:
```
  Discord.js-Turn-based-RPG
  ├── README.md
  ├── config.json
  ├── package.json
  ├── .env
  ├── .gitignore
  └── src
    ├── index.js
    ├── commands
      └── battle
        └── battle.js
    ├── events
      ├── interactionCreate
        └── handleCommands.js
      └── ready
        ├── 01registerCommands.js
        └── consoleLog.js
    ├── handlers
        └── eventHandler.js
    └── utils
        ├── areCommandsDifferent.js
        ├── getAllFiles.js
        ├── getApplicationCommands.js
        └── getLocalCommands.js
```

### Installation
All necessary installation for the project:
1. Install the Discord.js library `npm install discord.js`.
2. Install the dotenv library for managing environment variables `npm install dotenv`.
3. Install nodemon for automatic server reloading during development (optional) `npm install nodemon`.

## Development
<img align="left" src="https://github.com/Ndy-S/Discord.js-Turn-based-RPG/blob/main/bot_sample.png" alt="Bot Screenshot" width="350px"/>

The `battle.js` file contains the core logic for the battles in the Discord bot. In this project, I have implemented simplified character stats such as Attack, Defense, and HP, which you can modify to suit your needs. The damage calculation is based on a simple formula `Damage = Attack - Defense`. However, it's important to note that this formula may have certain limitations and drawbacks.

It's worth mentioning that the current damage calculation formula is just a basic implementation and may not cover all possible scenarios. Depending on your bot design and desired complexity, you may need to consider more advanced formulas or factors such as critical hits, elemental strengths and weaknesses, or other modifiers.

Feel free to explore the `battle.js` file and related commands to understand how the battle system works. You can customize and improve the logic based on your specific needs. You have the flexibility to modify and enhance the code to create a battle system that suits your bot requirements.

## Running the Bot
To run the bot, you can use the `nodemon` command if you have the `nodemon` library installed. This command helps with automatic server reloading during development, allowing you to see the changes in real-time as you make modifications to the code. To initialize the battle, you can use the `/battle` command in your discord server.

## License
MIT
