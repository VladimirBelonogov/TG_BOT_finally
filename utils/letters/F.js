import { Markup } from "telegraf";

export async function contentF (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Е" - Есть желание</strong>

Если у вас <strong>нет желания снимать Reels</strong> и, в целом, любой другой видео контент - не делайте этого.

Люди не дураки, они чувствуют ваше сопротивление в кадре и смотреть на вас страдающего никому не захочется.

Помимо "Говорящей головы" вы можете создавать массу единиц контента для Reels и привлекать к себе внимание и клиентов.

- <i>Озвучка</i>
- <i>Сторитейлинг</i> через <i>аудиоботов</i>
- <i>Короткие видео с текстом под них</i>

и еще массу других форматов мы обсуждаем на моём курсе <strong>"Азбука Reels"</strong>.

Хочешь набирать просмотры и не упахиваться на съёмке таких видео? Залетай на курс, пока всё это еще актуально!
`
let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('Открою вам секрет', 'https://azbukareels.ru/')],
        [Markup.button.callback('Следующая буква', 'ShowLetter')],
    ]
)
let source = {source: './img/F.JPG'};
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