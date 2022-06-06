const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const createPoll = () => {
  const dateSec = 86400;
  const question = `Сегодня ${new Date().getDate()} я сделала...`;
  const options = [
    'зарядка',
    'пресс',
    'ноги/попа',
    'руки/плечи',
    '5 минутка',
    '+ растяжка',
    '+ планка ',
    '+ свое',
  ];
  bot.sendPoll(Math.random(), question, options, {
    is_anonymous: false,
    type: 'regular',
    allows_multiple_answers: true,
    open_period: 2 * dateSec, // two days
  });
};

bot.onText(/\/poll/, (msg) => {
    bot.createPoll();
  });
  