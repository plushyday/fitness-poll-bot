const { monthMap, weekMap, chatOptions } = require('./utils.js');

const TelegramApi = require('node-telegram-bot-api');
const { CronJob } = require('cron');
const Client = require("@replit/database");

require('keep-alive-replit').listen(80);

const token = process.env.TELEGRAM_TOKEN;
const myChatId = process.env.TEST_CHAT_ID;
const CHAT_ID = 'chatId';

const bot = new TelegramApi(token, { polling: true });
const dbClient = new Client();

const getCurrDate = () => {
  const date = new Date();
  const day = date.getDate();
  const weekDay = weekMap[date.getDay()];
  const month = monthMap[date.getMonth()];

  return `(${weekDay} ${day} ${month})`;
};

const createPoll = async (chatId) => {
  const question = `Сегодня ${getCurrDate()} я...`;

  await bot.sendPoll(chatId, question, chatOptions, {
    is_anonymous: false,
    type: 'regular',
    allows_multiple_answers: true,
  });
};

bot.onText(/\/poll/, (msg) => { // for test
  const chatId = msg.chat.id;

  createPoll(chatId);
});

new CronJob(
  '0 22 * * *',
  async () => {
    const chatIdsObj = await dbClient.get(CHAT_ID);
    for (key in chatIdsObj) {
      try {
        await createPoll(key);
      }
      catch (err) {
        delete chatIdsObj[key];
        await dbClient.set(CHAT_ID, chatIdsObj);
      }
    }
  },
  null,
  true
);

bot.onText(/\/start/, async function(msg) {
  const chatId = msg.chat.id;
  let dbSet = await dbClient.get(CHAT_ID);
  if (Object.keys(dbSet).length !== 0) {
    dbSet[chatId] = chatId;
  }
  else {
    dbSet = { [dbSet]: dbSet }
  }
  await dbClient.set(CHAT_ID, dbSet);

  const reply = 'Привет, я бот для отображения полезностей в фитнес чате';
  bot.sendMessage(chatId, reply);

  console.log('chatId', chatId);
});

bot.onText(/\/dbdump/, async function(msg) {
  if (msg.chat.id.toString() !== myChatId.toString()) return

  let dbSet = await dbClient.getAll();
  console.log('dbSet', dbSet);
});
