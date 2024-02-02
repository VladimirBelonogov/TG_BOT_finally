import { Markup } from "telegraf";

export async function contentB (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Б" - Бл@дский монтаж</strong>
    
    Чтобы облегчить жизнь скажу сразу - сложный монтаж не работает на массы людей.
    
    На нашем опыте проще всего донести ценность своего продукта или создать вирусный видос - это простота. Потому что ей доверяют массы людей. Когда ты видишь что-то сильно сложно смонтированное, у тебя есть рушится порог доверия, потому что аудитория считывает уже это как "постановку" или "продажу"
            
    При этом важно понимать кто ваша целевая аудитория, если это молодое поколение "Tik Tok" и "быстрых денег", то там явно придется давать в медиа им ту скорость "склеек кадров" и наложений в кадре, к которой они привыкли.
            
    Если тебе интересно о чем мы говорим в модуле про "монтаж" - жми на кнопку "хочу заглянуть в Азбуку"
    `
    let keyboard = Markup.inlineKeyboard(
        [   
            [Markup.button.callback('Заглянуть в модуль "Монтаж"', 'additionalСontentB')],
        ])
    
    let source = {source: './img/B.JPG'};
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