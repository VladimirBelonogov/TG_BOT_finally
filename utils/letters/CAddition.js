import { Markup } from "telegraf";

export async function videoContentC (obj,tgBot = null,tgChatId = null){
    let text = `Разбор <a href="https://www.youtube.com/watch?v=8KZIQ5i7V58&ab_channel=ostashow">стилиста</a>`;
    let keyboard = Markup.inlineKeyboard(
        [   
            [Markup.button.url('Хочешь полный урок/разбор от стилиста?', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')]
        ]
    );
    
    try {
        if (tgBot === null) {
            return await obj.replyWithHTML(text,{parse_mode: 'HTML',...keyboard});
        } else {
            await tgBot.sendMessage(tgChatId, text,{parse_mode: 'HTML',...keyboard}) 
        }
    } catch (error) {
        console.log(error);
    }
}