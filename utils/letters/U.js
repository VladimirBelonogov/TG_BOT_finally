import { Markup } from "telegraf";

export async function contentU (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Х" Харизма</strong>

Убежден, что у каждого человека есть харизма.

Вопрос в том: "Насколько каждый из вас раскрыл её потенциал"

Вообще, когда у вас мощно прокачана харизма, то вам даже достаточно в комнату зайти и на вас люди уже обратят внимание и "что-то почувствуют".

Когда вы появляетесь в кадре, зрители так же считывают каждый ваш жест, ваш тембр голоса, вашу подачу, вашу уверенность в голосе, ваш глубокий посыл, ваше уменее шутить и еще с десяток других параметров.

Наша же задача - научиться "выкрутить" тумблер харизмы на максимум на данном этапе времени. Учимся это делать, получая обратную связь и вы заметите, как к вам потянутся люди и просмотры
`
        let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Забрать Азбуку Reels', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )
    let source = {source: './img/U.JPG'};
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