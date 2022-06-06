import { monthMap, weekMap, chatOptions } from './utils';

const TelegramApi = require('node-telegram-bot-api');
const CronJob = require('cron').CronJob;
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const getCurrDate = () => {
  const date = new Date();
  const day = date.getDate();
  const weekDay = weekMap[date.getDay()];
  const month = monthMap[date.getMonth()];

  return `(${weekDay} ${day} ${month})`;
};

const createPoll = (chatId) => {
  const dateSec = 86400;
  const question = `Сегодня ${getCurrDate()} я сделала...`;

  bot.sendPoll(chatId, question, chatOptions, {
    is_anonymous: false,
    type: 'regular',
    allows_multiple_answers: true,
    open_period: 2 * dateSec, // two days
  });
};

// bot.onText(/\/poll/, (msg) => {
//   createPoll(msg.chat.id);
// });

const job = new CronJob(
  '0 22 * * *',
  () => {
    createPoll();
  },
  null,
  true,
  'America/Los_Angeles'
);

bot.onText(/\/start/, function (msg) {
    if (config.bot.users.indexOf(msg.from.id) == -1) return;
    const chatId = msg.chat.id;
  });