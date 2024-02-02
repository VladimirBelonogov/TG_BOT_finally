import { Markup } from "telegraf";

export async function contentP (obj,tgBot = null,tgChatId = null){
    let text = `<strong>Буква "Р" Рекомендации</strong>

Максимально простой совет для всех, кто начинает свой блог.

Я напоминаю, что мы здесь не из стеснительных и самым лучшим советом для всех, кто начинает активно развивать активно свой блог - <strong>попросить о первой рекомендации.</strong>

<strong>НО ПРИ УСЛОВИИ</strong>, что ваш контент действительно будет интересно смотреть даже людям, не знакомым с вами и тогда каждый твой друг или подруга не поленится закинуть твой рилс репостом к себе в сторис! Если 5-10 друзей закинет ваш ролик к себе в аккаунт - у вас в разы повысятся охваты и алгоритмы даже смогут посчитает ваш ролик уникальным и начнут показывать новой аудитории.

А как снимать такие Reels, чтобы их было не стремно закинуть к себе в сторис вашим друзьям - я рассказываю на курсе "Азбука Reels"
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