import { Markup } from "telegraf";

export async function contentR (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Т" Театральная подготовка</strong>
    
    Большинство успешных медийных людей хотя бы раз в жизни заглядывали на "Урок актерского мастерства" от какого-то актера или режиссера театра.
    
    Лично я так делал и меня это раскрыло совсем с другой стороны!
    
    Для всех тех, кто:
    
    · стесняется говориться на камеру
    · боится что про тебя "как-то не так посмотрят"
    · стесняется говорить тексты
    Настоятельно рекомендую найти "Урок актерского мастерства" или "Урок по импровизации" у себя в городе и записаться на него.
    
    Обещаю, что вы по другому взглянете на вещи, которые вам казались "стремными" раньше.
    
    На курсе "Азбука Reels" я так же даю упражнения в проявлении себя на камеру, присоединяйся
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Забрать Азбуку Reels', 'https://azbukareels.ru/')],
            [Markup.button.callback('Следующая буква', 'ShowLetter')],
        ]
    )
    let source = {source: './img/R.JPG'};
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