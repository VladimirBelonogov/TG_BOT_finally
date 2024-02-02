import { Markup } from "telegraf";

export async function contentI (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "И" - Идеи для видео</strong>

<strong>Какие ролики снимать, чтобы они залетали?</strong>

Самый главный совет, пожалуй - <strong>раскрывать боли и основные запросы вашей целевой аудитории</strong> в темах ваших видео.

То есть, если вы работаете в какой-то сфере или нише и у вас 100% есть самые "часто задаваемые вопросы". По всем эти вопросам вы обязаны отснять интересные ролики, желательно с интересными и вовлекащими сценариями, чтобы ролик завирусился.

Как сделать так, чтобы <strong>быстро найти темы</strong> для контента на миллионы просмотров?

    1.) Заходите на YouTube и вбиваете основные слова для вашей целевой аудитории.

    2.) Выбираешь в фильтре опцию "по количеству просмотров"

    3.) Выбираешь за последний месяц или год (чтобы было реально актуально)

И вуаля - у тебя срез тем, которые интересны людям и которые они смотрят больше всего.

А как строить правильные сценарий для своих видео с оригинальными темами - мы раскроем этот секрет, когда вы дойдете до буквы "С".

Обязательно выключи уведомления в боте, чтобы прое*ать букву "С" и не получить бесплатный сценарий 😉
`
let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('Забрать Азбуку Reels', 'https://azbukareels.ru/')],
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