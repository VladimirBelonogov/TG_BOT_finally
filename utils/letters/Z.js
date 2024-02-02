import { Markup } from "telegraf";

export async function contentZ (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Э" Энтузиазм</strong>

· Ты давно потерял интерес к тому, чтобы снимать видео?
· Ты не видишь больших результатов и тебе остачертело ждать свои миллионные просмотры?
· Хочешь создавать видео с кайфом?

Добавим энтузиазма и накинем идей в нашем брейншторме идей в нужном окружении. Согласитесь, что запал можно получить, находясь в правильном месте.

Для участников "Азбуки Reels PRO" мы будем устраивать брейншторм для генерации мощных идей для их дальнейшей реализации!
`
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Записаться в Azbyka Reels PRO', 'https://azbukareels.ru/#tariffs')],
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