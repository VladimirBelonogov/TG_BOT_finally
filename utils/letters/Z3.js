import { Markup } from "telegraf";

export async function contentZ3 (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Я" Я даже не знаю...</strong>
    
    ... почему ты ещё не с нами в нашем мощнейшнем сообществе, которые прокачивается в создании вирусных, креативных и продающих видео "короткого" формата!
    
    Поток курса запускается 5 февраля, поторопись приобрести "Азбуку Reels +" или "Азбуку Reels PRO".
    
    Базовая версия доступна всегда на сайте, её вы можете приобрести не зависимо от времени.
    
    Я - Денис Осташов, благодарю каждого, кто подписан со мной на моих ресурсах:
    
    <a href="https://www.instagram.com/ostashow/">Instagram</a>
    
    <a href="https://t.me/ostashow/">Telegram</a>
    
    <a href="https://www.youtube.com/@ostashot">YouTube</a>
    `
    let keyboard = Markup.inlineKeyboard([
            [Markup.button.url('Подключиться к Азбуке Reels', 'https://azbukareels.ru/')],
    ])

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