import { Markup } from "telegraf";

export async function contentO (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "П" Подача</strong>
    
Давайте разберём на примере кино.

У каждого фильма есть свой темп повествования и подача истории. У Тарантино, например, всегда захватывающие и затянутые диалоги для того, чтобы прочувствовать внутренний мир героев, проникнуться ими и начать им сопереживать в разные необычных жизненных ситуациях.

В Джоне Уике, например, действия завязаны на экшене, быстром повествовании и динамике сюжета.

НО...

если Джона Уика погрузить в мир фильмов Тарантино, то он будет чувствовать себя некомфортно, ему не нужно будет разговаривать с другими, он просто вышебет кому-то мозга и побежит дальше расправляться с врагами.

Так же самая история и в съёмке видео. Если вам органична определенная динамика и подача - вы должны её довести до возможного идеала, чтобы по ощущениям казалось - вы точно в своей тарелке и тогда мне хочется вам верить и досмотреть ваше видео до конца.

Как усовершенствовать свой навык в подаче материала - мы разбираем на наших эфира "Азбука Reels"
`
    let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('"Забрать Азбуку Reels"', 'https://azbukareels.ru/')],
        [Markup.button.callback('Следующая буква', 'ShowLetter')],
    ]
)
let source = {source: './img/O.JPG'};
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