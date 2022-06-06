const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, { polling: true });
const monthMap = {
    '1': 'янв',
    '2': 'Фев', 
    '3': 'Мар', 
    '4': 'Апр', 
    '5': 'Май', 
    '6': 'Июн', 
    '7': 'Июл', 
    '8': 'Авг', 
    '9': 'Сен', 
    '10': 'Окт', 
    '11': 'Ноя', 
    '12': 'Дек'
};

const getCurrDate = () => {
    const day = new Date().getDate();
    const weekDay = new Date().getDay();
    const month = new Date().getMonth();

}

const createPoll = (chatId) => {
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
  