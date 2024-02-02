import { Markup } from "telegraf";

export async function contentQ (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "С" Сценарий для видео</strong>
    
    Я разработал 10 универсальных сценариев ⚡
    
    Одним из них я поделюсь прямо сейчас, если ты зайдешь в мой телеграм канал и не поленишься поставить огонёчек, на мой последний пост (там вообще любой пост заслуживает огонёчка от тебя, там я реально делюсь пользой каждый день)`
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Я прожал огонёчек на последний пост🔥🔥🔥', 'https://t.me/dnevnikreatora')],
            [Markup.button.callback('Получить бесплатный сценарий', 'additionalСontentQ')],
        ]
    )
    let source = {source: './img/Q.JPG'};
    
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