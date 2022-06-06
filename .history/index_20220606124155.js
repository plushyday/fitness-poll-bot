import { monthMap, weekMap } from './utils';

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
  bot.sendPoll(chatId, question, options, {
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
