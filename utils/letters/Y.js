import { Markup } from "telegraf";

export async function contentY (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Щ" Щедрость</strong>

Вы думаете, что конкуренты или ваши клиенты получат от вас "вашу базу знаний", то они никогда к вам не прийдут за услугой или продуктом?

Будьте щедрыми не не очкуйте выкладывать те инсайты, которыми пользуетесь сами и на базе которых вы обучаете своих учеников или применяете в работе с клиентами.

В этом и кроется успех в наборе подписчиков. Вам нужно просто записать свои знания и навыки и поделиться ими!

К вам придет клиент скорее всего не за этими инструментами, а за вашей харизмой, энергией и вашими навыками!

Делитесь и получайте в разы больше!
`
    let keyboard = Markup.inlineKeyboard([
            [Markup.button.url('Записаться на "Азбуку Reels"', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ])
    let source = {source: './img/Y.JPG'};
    
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