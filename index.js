import { Telegraf, session, Markup, Scenes, Composer, Telegram } from "telegraf";
import 'dotenv/config';
import * as cron from "node-cron"
import { checkUser, createUser, getAllUsers, updateLetter, updateLetterPlusCount } from "./utils/database/index.js";
import * as lettersContent from "./utils/letters/index.js";

const bot = new Telegraf('6650174368:AAHgE37hq2sg8Zcy-UyiwpYAidHNhfTRLOk');

// const bot = new Telegraf(process.env.TOKEH);

bot.use(session());
bot.use( async(ctx,next) => {
    if(!ctx.session){
        ctx.session = {
            users: [],
            state: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Z2','Z3'],
            actualState: 0,
            currentStepToday: 0,
        }
    }

    checkUser(ctx.chat.id, (err,exist,user) => {
        if (!exist) {
            createUser(ctx.chat.id)
        } else if (user.is_subscriber === 1) {
            let currentLetter = user.letter;
            // let lastLetterSend = user.last_letter_send;
            ctx.session.actualState = ctx.session.state.findIndex((e) => { e === currentLetter}) + 1;
            
            if (ctx.session.actualState > 0){
                let currentCount = user.current_count;
                ctx.session.currentStepToday = currentCount;
            }
        } 
    })

    return next()
})

bot.start(async (ctx) => {
    await ctx.reply('Поехали', Markup.inlineKeyboard(
        [
            Markup.button.callback('⬇️', 'ShowLetter'),
        ]
    ));;
})

bot.action ('ShowLetter', async (ctx) => {
    const user = ctx.chat.id
    
    getAllUsers((err, users) => {

        if (err) {
            console.log(err,'Ошибка в ShowLetter');
        } else {
            users.forEach(async(userbd) => {
                if (userbd.telegram_id == user) {
                    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Z2','Z3'];
                    let currentCount = userbd.current_count;
                    let currentLetter = userbd.letter;
                    let actualState = letters.findIndex((e) => {
                        return e === currentLetter
                    }) + 1;
                        if (currentLetter == 'Z3') {
                            (`Пользователь ${user.telegram_id} просмотрел все буквы и хочет ещё!!!`)
                        } else if (currentCount <= 5){
                            switch (letters[actualState]) {
                                case 'A':
                                    await lettersContent.contentA(ctx);
                                    break
                                case 'B':
                                    await lettersContent.contentB(ctx)
                                    break
                                case 'C':
                                    await lettersContent.contentC(ctx)
                                    break
                                case 'D':
                                    await lettersContent.contentD(ctx);
                                    break
                                case 'E':
                                    await lettersContent.contentE(ctx);
                                    break
                                case 'F':
                                    await lettersContent.contentF(ctx);
                                    break
                                case 'G':
                                    await lettersContent.contentG(ctx);
                                    break
                                case 'H':
                                    await lettersContent.contentH(ctx);
                                    break
                                case 'I':
                                    await lettersContent.contentI(ctx);
                                    break
                                case 'J':
                                    await lettersContent.contentJ(ctx);
                                    break
                                case 'K':
                                    await lettersContent.contentK(ctx);
                                    break
                                case 'L':
                                    await lettersContent.contentL(ctx);
                                    break
                                case 'M':
                                    await lettersContent.contentM(ctx);
                                    break
                                case 'N':
                                    await lettersContent.contentN(ctx);
                                    break
                                case 'O':
                                    await lettersContent.contentO(ctx);
                                    break
                                case 'P':
                                    await lettersContent.contentP(ctx);
                                    break
                                case 'Q':
                                    await lettersContent.contentQ(ctx);
                                    break
                                case 'R':
                                    await lettersContent.contentR(ctx);
                                    break
                                case 'S':
                                    await lettersContent.contentS(ctx);
                                    break
                                case 'L':
                                    await lettersContent.contentL(ctx);
                                    break
                                case 'T':
                                    await lettersContent.contentT(ctx);
                                    break
                                case 'U':
                                    await lettersContent.contentU(ctx);
                                    break
                                case 'V':
                                    await lettersContent.contentV(ctx);
                                    break
                                case 'W':
                                    await lettersContent.contentW(ctx);
                                    break
                                case 'X':
                                    await lettersContent.contentX(ctx);
                                    break
                                case 'Y':
                                    await lettersContent.contentY(ctx);
                                    break
                                case 'Z':
                                    await lettersContent.contentZ(ctx);
                                    break
                                case 'Z2':
                                    await lettersContent.contentZ2(ctx);
                                    break
                                case 'Z3':
                                    await lettersContent.contentZ3(ctx);
                                break        
                            }
                            updateLetterPlusCount(userbd.telegram_id,letters[actualState], ++userbd.current_count)
                        } else {
                            ctx.replyWithHTML(`Упппс!

Если ты хочешь получить все знания сразу, то можешь зайти к нам на сайт и приобрести один из пакетов «Азбуки Reels».

А следующую букву пришлём чуть позже, боту тоже нужен отдых 💆
`, Markup.inlineKeyboard(
               [
                   [Markup.button.url('Попасть в "Azbyka Reels"', 'https://azbukareels.ru/#tariffs')],
               ]
        ))}}
    })}})})

bot.action ('additionalСontentB', async(ctx) => {
    await ctx.replyWithDocument({source: './utils/content/С.pdf', filename: 'Модуль 3.Монтаж.pdf'})
    await ctx.replyWithHTML(`Хочешь разобраться с тем, как создавать и монтировать видео?
        `,Markup.inlineKeyboard(
            [   
                [Markup.button.url('Заходи к нам в "Азбуку Reels"', 'https://azbukareels.ru/')],
                [Markup.button.callback('Следующая буква', 'ShowLetter')],
            ]
        ));
    }
)

bot.action ('additionalСontentC', (ctx) => {
    lettersContent.videoContentC(ctx)
})

bot.action ('additionalСontentQ', (ctx) => {
    lettersContent.additionalСontentQ(ctx)
})
bot.launch()

cron.schedule ( '5,10,15,20,25,30,35,40,45,50,55 * * * * *', async()=> {
    getAllUsers((err, users) => {

        if (err) {
            console.log(err,'Ошибка cron');
        } else {
            users.forEach(async(user) => {
                console.log(user.is_subscriber);
                console.log(typeof(user.is_subscriber));
                if (user.is_subscriber === 1) {
                    try {
                        console.log(user);
                        let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Z2','Z3'];
                        let currentLetter = user.letter;
                        let actualState = letters.findIndex((e) => {
                            return e === currentLetter
                        }) + 1;
                        console.log(actualState);
                        console.log(currentLetter);
                        if (currentLetter !== 'Z3') {
                            switch (letters[actualState]) {
                                case 'A':
                                    await lettersContent.contentA(null,bot.telegram, user.telegram_id);
                                    break
                                case 'B':
                                    await lettersContent.contentB(null,bot.telegram, user.telegram_id)
                                    break
                                case 'C':
                                    await lettersContent.contentC(null,bot.telegram, user.telegram_id)
                                    break
                                case 'D':
                                    await lettersContent.contentD(null,bot.telegram, user.telegram_id);
                                    break
                                case 'E':
                                    await lettersContent.contentE(null,bot.telegram, user.telegram_id);
                                    break
                                case 'F':
                                    await lettersContent.contentF(null,bot.telegram, user.telegram_id);
                                    break
                                case 'G':
                                    await lettersContent.contentG(null,bot.telegram, user.telegram_id);
                                    break
                                case 'H':
                                    await lettersContent.contentH(null,bot.telegram, user.telegram_id);
                                    break
                                case 'I':
                                    await lettersContent.contentI(null,bot.telegram, user.telegram_id);
                                    break
                                case 'J':
                                    await lettersContent.contentJ(null,bot.telegram, user.telegram_id);
                                    break
                                case 'K':
                                    await lettersContent.contentK(null,bot.telegram, user.telegram_id);
                                    break
                                case 'L':
                                    await lettersContent.contentL(null,bot.telegram, user.telegram_id);
                                    break
                                case 'M':
                                    await lettersContent.contentM(null,bot.telegram, user.telegram_id);
                                    break
                                case 'N':
                                    await lettersContent.contentN(null,bot.telegram, user.telegram_id);
                                    break
                                case 'O':
                                    await lettersContent.contentO(null,bot.telegram, user.telegram_id);
                                    break
                                case 'P':
                                    await lettersContent.contentP(null,bot.telegram, user.telegram_id);
                                    break
                                case 'Q':
                                    await lettersContent.contentQ(null,bot.telegram, user.telegram_id);
                                    break
                                case 'R':
                                    await lettersContent.contentR(null,bot.telegram, user.telegram_id);
                                    break
                                case 'S':
                                    await lettersContent.contentS(null,bot.telegram, user.telegram_id);
                                    break
                                case 'L':
                                    await lettersContent.contentL(null,bot.telegram, user.telegram_id);
                                    break
                                case 'T':
                                    await lettersContent.contentT(null,bot.telegram, user.telegram_id);
                                    break
                                case 'U':
                                    await lettersContent.contentU(null,bot.telegram, user.telegram_id);
                                    break
                                case 'V':
                                    await lettersContent.contentV(null,bot.telegram, user.telegram_id);
                                    break
                                case 'W':
                                    await lettersContent.contentW(null,bot.telegram, user.telegram_id);
                                    break
                                case 'X':
                                    await lettersContent.contentX(null,bot.telegram, user.telegram_id);
                                    break
                                case 'Y':
                                    await lettersContent.contentY(null,bot.telegram, user.telegram_id);
                                    break
                                case 'Z':
                                    await lettersContent.contentZ(null,bot.telegram, user.telegram_id);
                                    break
                                case 'Z2':
                                    await lettersContent.contentZ2(null,bot.telegram, user.telegram_id);
                                    break
                                case 'Z3':
                                    await lettersContent.contentZ3(null,bot.telegram, user.telegram_id);
                                break        
                            }
                            updateLetter(user.telegram_id,letters[actualState], actualState)
                        } else {
                            return console.log(`Пользователь ${user.telegram_id} просмотрел все буквы!!!`)
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } 
        })}
    }
)})
