const TelegramApi = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const getPollQuestion = (date) => {
    return `Сегодня ${date} я сделала...`
};

const bot = new TelegramApi(token, {polling: true});

const pollConstructor = () => {
    bot.sendPoll(Math.random(), )
}