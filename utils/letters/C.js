import { Markup } from "telegraf";

export async function contentC (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "В" - Внешний вид</strong>

Выбирая свой внешний вид, для записи своих экспертных Reels.

Зачастую, мы даже не задумываемся насчёт этого, но тут и кроется ошибка, особенно, если мы хотим продавать свой продукт или услугу через этот ролик.

Мы пригласили СТИЛИСТА для разбора основных ошибок при съёмок ваших видео. Хочешь увидеть бесплатный урок от стилиста?
`
    let keyboard = Markup.inlineKeyboard(
    [   
        [Markup.button.callback('Посмотреть разбор стилиста', 'additionalСontentC')],
    ])

    let source = {source: './img/C.JPG'};
        if (tgBot === null) {
            return await obj.replyWithPhoto(source, {caption: text, parse_mode: 'HTML', ...keyboard});
        } else {
            try {
                await tgBot.sendPhoto(tgChatId,source,{caption: text, parse_mode: 'HTML', ...keyboard})
            } catch (error) {
                console.log(error);
                
            }
        }
}