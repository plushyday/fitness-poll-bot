// const TeleBot = require('telebot');
const TelegramApi = require('node-telegram-bot-api');
const TELEGRAM_BOT_TOKEN = '5547717612:AAEy5HP8JOlCU8AMNZGxnf8L1TQzL2bS3HU';

// const bot = new TeleBot({
//   token: TELEGRAM_BOT_TOKEN, // Required. Telegram Bot API token.
//   polling: {
//     // Optional. Use polling.
//     interval: 1000, // Optional. How often check updates (in ms).
//     timeout: 0, // Optional. Update polling timeout (0 - short polling).
//     limit: 100, // Optional. Limits the number of updates to be retrieved.
//     retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
//   },
//   allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
//   usePlugins: ['askUser'], // Optional. Use user plugins from pluginFolder.
//   pluginFolder: '../plugins/', // Optional. Plugin folder location.
//   pluginConfig: {
//     // Optional. Plugin configuration.
//     // myPluginName: {
//     //   data: 'my custom value'
//     // }
//   },
// });

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
// bot.on('text', (msg) => msg.reply.text(msg.text));

bot.on('/poll', (msg) => {
    msg.
});

bot.start();
