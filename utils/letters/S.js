import { Markup } from "telegraf";

export async function contentS (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "У" Упростить</strong>
    
    Моя суперсила, которую я применяю со своими учениками в личной работе - простыми словами объяснять сложные вещи в создании контента.
    
    Когда каждый из вас возмет за правило упрощять все то, что вы знаете, то вы с больше долей вероятности сможете достучаться до большего числа людей, а как следствие и будете в своих видео набирать бОльшее количество просмотров.
    
    Мы же за этим здесь, верно?
    
    Секрет прост, вопрос лишь: "Придерживаетесь ли вы его?"
    
    Очень легко получить обратную связь в работе с нами на курсе Азбука Reels на тарифе PRO или в личной работе с <a href="https:/t/me/ostashow">Денисом Осташовым</a> 
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Записаться на тариф PRO', 'https://azbukareels.ru/#tariffs')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )
    try {
        if (tgBot === null) {
            await await obj.replyWithHTML(text,{parse_mode: 'HTML',...keyboard});
        } else {
            await tgBot.sendMessage(tgChatId, text,{parse_mode: 'HTML',...keyboard}) 
        }
    } catch (error) {
        console.log(error);
    }
}