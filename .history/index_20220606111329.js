const TelegramApi = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const pollConstructor = () => {
  const pollQuestion = `Сегодня ${new Date().getDate()} я сделала...`;
  const pollOptions = [
    'зарядка',
    'пресс',
    'ноги/попа',
    'руки/плечи',
    '5 минутка',
    '+ растяжка',
    '+ планка ',
    '+ свое',
  ];
  // bot.sendPoll(Math.random(), )
};
