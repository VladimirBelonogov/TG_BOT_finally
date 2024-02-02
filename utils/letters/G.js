import { Markup } from "telegraf";

export async function contentG (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ж" - Жизненно</strong>
    
    В первую очередь мы люди, поэтому нам <strong>важно показывать себя настоящих</strong> в наших социальных сетях.
    
    
    Жизненный контент может стать максимально виральным, если он зацепит какой-то <strong>социально-бытовой вопрос</strong> или же просто будет отображением какой-то <strong>ситуации из жизни</strong> людей.
    
    А там где было много просмотров, там и доверие и подписки и , как следствие - продажи.
    
    Вот 3 примера роликов, которые я создал по приколу, а они мне привели аудиторию в инстаграм и тик токе:
    
    <a href="https://www.instagram.com/reel/CubuLjPohLk/?igsh=MXJkYW0xMHhjeWhjcQ](https://www.instagram.com/reel/CubuLjPohLk/?igsh=MXJkYW0xMHhjeWhjcQ">Instagram</a>
    <a href="https://vt.tiktok.com/ZSNKgT8vs/">Tik Tok</a>
    <a href="https://vt.tiktok.com/ZSNKp6ART/">Tik Tok</a>
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Мы же не роботы', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )
    let source = {source: './img/G.jpeg'};
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