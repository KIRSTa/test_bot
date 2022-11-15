import "dotenv/config"
import { Telegraf } from 'telegraf'
import {GoogleSpreadsheet} from 'google-spreadsheet'



// const tgToken = "5532864814:AAGbLT5uiWAF3f3O2mH47xWsRHsyEt4V2f0"
const doc = new GoogleSpreadsheet("1wBrHB6meYcmRCv_yrCj605czwtyqwDdsvnAl8SYDiXA")
const bot = new Telegraf(String(process.env.TG_TOKEN))
// const bot = new Telegraf(tgToken)
// bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));