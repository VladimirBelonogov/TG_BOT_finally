import { Markup } from "telegraf";

export async function contentA (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "А" - Азбука Reels</strong>

В боте я расскажу тебе от "А до Я", что важно в создании качественных, набирающих просмотры Reels и YouTube Shorts в бесплатном формате.

У тебя есть возможность ускориться и запрыгнуть к нам на курс, для самостоятельного изучения, так же и можем в течение месяца прокачать твои навыки с командой и с обратной связью.
А сейчас мы начинаем наше изучение азбуки, где тебя будут ждать:

    ● <strong>БЕСПЛАТНЫЕ</strong> уроки от экспертов
    ● <strong>БЕСПЛАТНЫЕ</strong> гайды 
    ● <strong>БЕСПЛАТНЫЕ</strong> шаблоны сценариев

и еще очень много пользы!

А если ты готов получать всегда <strong>ВСЕ</strong> и <strong>СРАЗУ</strong>, залетай к нам на курс, группа стартует 5 февраля 👇
`;
let keyboard = Markup.inlineKeyboard(
    [
        [Markup.button.url('Лови информацию об "Азбуке Reels"', 'https://azbukareels.ru/')],
        [Markup.button.callback('Следующая буква', 'ShowLetter')],
    ]);
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