import { Markup } from "telegraf";

export async function contentW (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ч" Частота кадров камеры</strong>

Вы вдумывались вообще, сколько настроек камеры в вашем телефоне и зачем они вообще нужны?

Это база, которую стоит освоить, прежде, чем начинать активно снимать видео, возможно даже, в специальных условиях.

Так же есть набор программ для монтажа, работы с текстом и с креативами, которыми вы можете пользоваться в Reels и в ваших сторис.

Всё это будет ждать вас в базовой версии "Азбуки Reels"
`
let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Азбуку Reels PRO', 'https://azbukareels.ru/#tariffs')],
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