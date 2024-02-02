import { Markup } from "telegraf";

export async function contentV (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ц" Цена и ценность</strong>
    
    Вопрос цены - важный вопрос.
    
    Могу сказать лично, пройдя обучение продажам на высокий чек, что они явно отличаются от продаж на низкий не только "качеством клиентов", но и "качеством запроса".
    
    Если у вас есть продукт и вы его хотите продвигать через Reels, то значит мы сможем помочь сформировать вашу ценность на рынке и упаковать её в ваш контент, чтобы вы начали зарабатывать благодаря этому инструменту привлечения клиентов.
    
    Если же у вас нет продукта, то будем формировать ценность вашего аккаунта, чтобы всем, кто посмотрит ваш Reels было чётко понятно, зачем им подписываться на вас
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Записаться на Азбуку Рилс +', 'https://azbukareels.ru/#tariffs')],
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