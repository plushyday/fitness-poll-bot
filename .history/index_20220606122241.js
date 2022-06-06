const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, { polling: true });
const monthMap = {
  1: 'янв',
  2: 'фев',
  3: 'мар',
  4: 'апр',
  5: 'мая',
  6: 'июня',
  7: 'июля',
  8: 'авг',
  9: 'сен',
  10: 'окт',
  11: 'ноя',
  12: 'дек',
};
const weekMap = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'cб',
  7: 'вск',
};

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

bot.onText(/\/poll/, (msg) => {
  createPoll(msg.chat.id);
});
