import { Markup } from "telegraf";

export async function contentZ2 (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ю" Юмор</strong>
    
Самый мощный инструмент для запуска такого триггера, как "репост видео" - это записать ролик с юморов. Куда больший эффект охватов имеют видео с юмором для людей не свойственным этого в их нише или в их "атмосфере блога"

Переодически это важно делать, так как такие видео смогут привлечь к вам новую аудиторию и дать возможность алгоритмам инстаграм "прогреть" ваш аккаунт для большого числа людей.

Но будьте аккуратны. Все блоги, которые основываются на юморе с трудом продают свои продукты или услуги, если у вас не уникальные сценарии с интеграцией ваших продаж.
`
    let keyboard = Markup.inlineKeyboard([
            [Markup.button.url('Записаться на "Азбуку Reels"', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ])
    let source = {source: './img/Z2.JPG'};
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