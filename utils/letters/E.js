import { Markup } from "telegraf";

export async function contentE (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Д" - Досматриваемость Reels</strong>
    
    Ну, во-первых вы должны использовать профессиональные аккаунты для мониторинга ваших показателей в статистике.
    
    Успешные Reels основаны не только на умении цеплять внимание, но и качественно удерживать внимание в просмотрах ваших роликов.
    
    Посмотрите, на какой секунде обычно зрители уходят на каждом из ваших Reels. Почему они вообще перестают смотреть?
    
    Все эти вопросы мы решаем на креативных штурмах и онлайн-разборах в Азбуке Reels
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Откройте статистику вашего Reels', 'https://azbukareels.ru/')],
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