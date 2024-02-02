import { Markup } from "telegraf";

export async function contentN (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "О" Охват аудитории</strong>

Если вы снимаете контент про себя - то это будет интересно десяткам, может сотне людей в вашем блоге.

Если вы снимаете контент, который закрывает о нише, то это будет интересно для тысячи людей

Если вы снимаете контент, который закрывает боли целевой аудитории - он набирает сотни тысяч.

Если вы снимаете видео, которое закрывает боли аудитории - это набирает миллионы просмотров.

Мыслите шире, думайте масштабнее и у вас появятся ролики на миллионы просмотров 👍
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