import { Markup } from "telegraf";

export async function contentX (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ш" Шрифты</strong>

Помимо стандартных шрифтов в инстаграме существует возможность добавать красивые и оригинальные шрифты в ваши видео и сторис.

Рассказываю про все эти инструменты в первом модуле "Азбуки Reels"
`
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Записаться на базовый тариф "Азбуки Reels"', 'https://azbukareels.ru/#tariffs')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )

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