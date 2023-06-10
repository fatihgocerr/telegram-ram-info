const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const os = require('os');

dotenv.config();
const token = process.env.BOT_KEY
const chatId = process.env.CHAT_ID
const bot = new TelegramBot(token, {polling: true});

const bytesToGB = (bytes) => {
 const gb = bytes / 1024 / 1024 / 1024;
 return gb.toFixed(2);
}

const totalRAM = os.totalmem();
const freeRAM = os.freemem();
const usedRAM = totalRAM - freeRAM;
const usedRAMPercentage = (usedRAM / totalRAM) * 100;

function sendMessages() {
 bot.sendMessage(chatId, `
🤖 Used RAM: ${bytesToGB(usedRAM)} GB
🤖 Total RAM: ${bytesToGB(totalRAM)} GB
🤖 Used RAM Percentage: ${usedRAMPercentage.toFixed(2)}%
`);
}

sendMessages();


