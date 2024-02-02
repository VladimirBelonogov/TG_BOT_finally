import { Markup } from "telegraf";

export async function contentT (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Ф" Фоновая музыка</strong>
    
    Для придачи атмосферности ваших видео я всегда использую саунддизайн своих роликов. Основа его состоит в правильно подобранной музыке под настроение вашего видео, которая будет не отвлекать словами, а наоборот, мелодично дополнять ваши слова.
    
    В "Азбуке Reels +" и "Азбуке Reels PRO" у вас будет доступ к личной библиотеке треков, состоящий из 200+ песен на портале Яндекс.Музыка.
    
    С этой подборкой ваши Reels будут более атмосферными и интересными к просмотру, пользуйтесь 😉
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