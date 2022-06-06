import { monthMap, weekMap, chatOptions } from './utils.js';

import TelegramApi from 'node-telegram-bot-api';
import { CronJob } from 'cron';
import dotenv from 'dotenv';

dotenv.config();

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
  const question = `Сегодня ${getCurrDate()} я сделала...`;

  bot.sendPoll(chatId, question, chatOptions, {
    is_anonymous: false,
    type: 'regular',
    allows_multiple_answers: true,
  });
};

// bot.onText(/\/poll/, (msg) => { // for test
//   const chatId = msg.chat.id;

//   createPoll(chatId);
// });

const job = new CronJob(
  '0 16 * * *',
  () => {
    createPoll(process.env.TEST_CHAT_ID);
  },
  null,
  true,
  ''
);

bot.onText(/\/start/, function (msg) {
    const chatId = msg.chat.id;
    const reply = 'Привет, я бот для отображения полезностей в фитнес чате';
    bot.sendMessage(chatId, reply);

    console.log('chatId', chatId);
});

job.start();