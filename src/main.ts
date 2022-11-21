import "dotenv/config"
import { Telegraf } from 'telegraf'
import {GoogleSpreadsheet} from 'google-spreadsheet'
import { assert } from "console"

// const bot = new Telegraf(tgToken)
const bot = new Telegraf(String(process.env.TG_TOKEN))
assert(bot !=null,'No TG_TOKEN environment variable found')

const doc = new GoogleSpreadsheet("1wBrHB6meYcmRCv_yrCj605czwtyqwDdsvnAl8SYDiXA")

const p2p_email = (String(process.env.P2P_MANGER_EMAIL))
const p2p_key = (String(process.env.P2P_MANGER_KEY))

assert(p2p_email !=null,'No P2P_MANAGE_EMAIL environment variable found')
assert(p2p_key !=null,'No P2P_MANGER_KEY environment variable found')


start()
async function start () {
    try{
        await doc.useServiceAccountAuth({
            client_email: p2p_email!, 
            private_key: p2p_key!})
    } catch(e){
        console.error(e)
    }
    
    
    bot.start((ctx) => ctx.reply('Welcome'));
    bot.on('text',async(ctx)=>{
        console.info(ctx)
    })
    // bot.help((ctx) => ctx.reply('Send me a sticker'));
    // bot.on('sticker', (ctx) => ctx.reply('👍'));
    // bot.hears('hi', (ctx) => ctx.reply('Hey'));
    bot.launch();
    
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM')); 
}
