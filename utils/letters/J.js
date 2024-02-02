import { Markup } from "telegraf";

export async function contentJ (obj,tgBot = null,tgChatId = null){

    let text = `<strong>Буква "К" Качели просмотров</strong>

Выкладываешь видео и не получаешь столько просмотров, сколько ожидаешь и расстраиваешься?

А потом когда-то выкладываешь ролик на который и надежды то не было, а он, падла, залетает на миллионы просмотров!

Эти качели в просмотрах напрямую влияют на твоё настроение, согласен?

Совет простой - <strong>перестань смотреть на цифры</strong> и тем более как-то на них реагировать (не, ну если ролик залетает в рекомендации, то безусловно стоит порадоваться и наградить себя).

Но вот быть более подготовленному к большим просмотрам у вас получится быть благодаря крутым идеям, сценариям и уверенной подаче материала.

А когда ролик вируситься - вообще лучше быть заряженным, чтобы продавать свои услуги и не просрать свою "неделю славы".

Как правильно подготовиться к ролику, который полетить в рекомендации - я рассказываю на курсе "Азбука Reels" в пакетах + и PRO.
`
let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('"Забрать Азбуку Reels"', 'https://azbukareels.ru/')],
        [Markup.button.callback('Следующая буква', 'ShowLetter')],
    ]
)
let source = {source: './img/J.PNG'};
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