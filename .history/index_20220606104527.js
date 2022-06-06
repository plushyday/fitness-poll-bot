const TelegramApi = require('node-telegram-bot-api');
const axios = require('axios');
const { getConvertedItem, getFormattedTimeFromEventDate } = require('./utils');
require('dotenv').config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramApi(token, {polling: true});
