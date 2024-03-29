import { Markup } from "telegraf";

export async function additionalСontentQ (obj,tgBot = null,tgChatId = null){
    let text = `<№4 Шаблон “Аренда внимания”
    
    🤌Упаковка имеет значение и сейчас я вам это докажу.
    
    Допустим, я даю вам несколько советов о том, как нужно работать с соц. сетями и какой контент делать. Это имеет смысл и звучало логично. А затем приходит Саша Митрошина и также дает вам совет по вашем маркетинговой стратегии в соц. сетях, только она дает советы полностью противоположные моим. 
    
    Кого бы вы выбрали послушать? 
    
    Скорее всего Сашу, так как она доказала своими результатами свою компетентность, что ставит её в более выгодное положение. Задействуйте это знание в своем контенте, берем в кредит славу и узнаваемость других, чтобы вызвать больше отклика у аудитории и привлечь больше внимания.
    
    <i>Арендованное внимание → Информационный блок → Ваша ценность → Вовлечение / Призыв к действию</i>
    
    📣 Аренда внимания
    
    Мы не присваиваем чье-то имя или заслуги, мы просто заимствуем его для внимания зрителей! Скажем, для этого примера мы помогаем предпринимателям стать более продуктивными
    
    Пример: Вместо “3 лайфхаков для продуктивности” попробуйте организовать свой день как Илон Маск
    
    💬 Информационный блок
    Они здесь только из-за имени, которое мы только что позаимствовали, удерживайте их внимание, давая им информацию, ради которой они здесь. Будьте краткими и простыми, мы не хотим, чтобы это видео превратилось в часовое интервью
    
    <i>Пример: Илон планирует свой день на 5-минутные интервалы, при этом график он составляет заранее</i>
    
    🔝 Ваша ценность
    
    Теперь настало время вернуть себе авторитет и показать им, что вы не просто ведущий новостей. Добавьте этому видео какую-то ценность, кроме как сообщение о том, какой сумасшедший график работы у Илона.
    
    <i>Пример: Этот метод называется Timeboxing. Timeboxing — это практика установки фиксированного количества времени для каждой задачи и включения этих блоков времени в ваше расписание. Я использую это ежедневно, и это помогло мне и моим клиентам достичь каждой цели, которую мы поставили в этом году.</i>
    
    👉Вовлечение / Призыв к действию
    
    Таким образом, теперь у вас есть выбор: вы можете либо добавить призыв к действию, чтобы попытаться повысить охваты этого поста, либо вы можете использовать этот пост, чтобы привлечь внимание к вашему продукту, особенно если вы добавили какое-то социальное доказательство
    
    Пример с вовлечением: <i>подпишись, чтобы узнать больше лайфхаков и систем продуктивности</i>
    
    Пример с предложением: <i>если ты хочешь узнать, как работать со временем, забирай мой бесплатный шаблон по тайм менеджменту по ссылке в шапке профиля</i>
    
    🔥ФИНАЛЬНАЯ ВЕРСИЯ
    
    <i>Вместо “3 лайфхаков для продуктивности” попробуйте организовать свой день как Илон Маск Илон планирует свой день на 5-минутные интервалы, при этом график он составляет заранее Этот метод называется Timeboxing. Timeboxing — это практика установки фиксированного количества времени для каждой задачи и включения этих блоков времени в ваше расписание. Я использую это ежедневно, и это помогло мне и моим клиентам достичь каждой цели, которую мы поставили в этом году. Если ты хочешь узнать, как работать со временем, забирай мой бесплатный шаблон по тайм менеджменту по ссылке в шапке профиля</i>
    `
    let keyboard = Markup.inlineKeyboard(
        [
            [Markup.button.url('Забрать ещё 9 сценариев', 'https://azbukareels.ru/')],
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