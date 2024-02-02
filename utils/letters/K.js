import { Markup } from "telegraf";

export async function contentK (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Л" Лёгкость</strong>
    
    Как говориться: "Камеру не нае*ёшь"
    
    Ваша энергетика в кадре напрямую эквивалентна вашим просмотрам.
    Если вы трясётесь от страха записи видео - это провал
    Если вы боитесь записывать, потому что вас осудят - это провал
    Если вы не хотите негативных обсуждений под ваши видео - это провал
    
    Хочешь стать более уверенным в себе при записи видео? Хочешь делать реально крутые и интересные миллионам людей ролики?
    
    Тебе подойдет пакет PRO "Азбука Reels" на нашем курсе по созданию коротких видео, где тебя научат, как расслабиться и начать "с кайфом" создавать полезный контент!
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('"Забрать Азбуку Reels"', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )
    let source = {source: './img/K.JPG'};
    try {
        if (tgBot === null) {
            return await obj.replyWithPhoto(source, {caption: text, parse_mode: 'HTML', ...keyboard});
        } else {
            await tgBot.sendPhoto(tgChatId,source,{caption: text, parse_mode: 'HTML', ...keyboard})
        }
    } catch (error) {
        console.log(error);
    }
}