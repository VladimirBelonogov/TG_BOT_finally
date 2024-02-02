import { Markup } from "telegraf";

export async function contentD (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Г" - Голос в кадре</strong>

Думаю, каждый из вас понимает, что снимая видео надо научиться говорить с аудиторией "по-настоящему".

Хотя зачастую ты пересматриваешь свои видео и ты чувствуешь, что, по факту, ты тут разговариваешь "со стеной".

Как этого избежать? Как достичь результата в постановке своего голоса? Обо всем этом мы поговорим на онлайнах нашей "Азбуки Reels" + и PRO, ждём тебя

А как ты разговариваешь с аудиторией?`
let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('А как ты разговариваешь с аудиторией?', 'https://azbukareels.ru/')],
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