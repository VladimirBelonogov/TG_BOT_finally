import { Markup } from "telegraf";

export async function contentM (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Н" Наблюдение</strong>
    
    Успешного креатора контента отделает одно очень важное умение - наблюдать и анализировать свой контент.
    
    Для этого и существуют, на самом деле инструменты анализа ваших видео. В профессиональной панели вы можете отследить "среднее время просмотра" в инстаграм, а в YouTube и тик токе - вообще график удержания внимания ваших зрителей.
    
    Умение собирать данные и в дальнейшем их анализировать приведёт вас к идеальной формуле создания ваших видео, которые будут досматривать до конца миллионы человек!
    
    Своим опытом в анализе делятся ученики нашей "Азбуке Reels" в общем чате. Присоединяйся к курсу и ты!
    
    p.s. чат доступен только для + и PRO версии курса
    `
    let keyboard = Markup.inlineKeyboard(
            [
                [Markup.button.url('Присоедениться к "Азбуке Reels"', 'https://azbukareels.ru/')],
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