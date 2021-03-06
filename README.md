# Telegram-bot Sms/Call-bomber 💣💥
https://securedev.info/posts/sms-call-bomber.html

## Краткое описание функционала бота
### Библиотека для работы с Telegram-ботом
Бот реализован на библиотеки Telegraf.js https://telegraf.js.org

Боту реализовал 4 сцены:
1. Single flood: для запуска flood-a на один номер
2. Scope flood: для запуска flood-a одновременно на несколько номеров
3. Greater_scene: для предоставления доступа
4. Test_flood_scene: для тестирования (запускает flood с 3 сервисов, команда /tima_test)

### Контроль доступа и предоставление доступа
Контроль доступа реализован с помощью проверки наличия telegram-id в массив access_list, в файле scripts\keyboards_text_acl.js 
Пример:
```
bot.start((ctx) => {
	if (keyboard_text.access_list.includes(ctx.from.id)){
		my_functions.my_inline_keyboard(ctx, keyboard_text.main_text, keyboard_text.first_keyboard);
	} else {
		ctx.replyWithMarkdown("Ooops you don't have permission, your telegram id: `" + ctx.from.id + "`")
	}
})
```
После запуска бота (команда /start), проверяется наличие telegram-id в массиве access_list, что в свою очередь выдает true или false. В случае true, происходит вызов inline клавиатуры, что дает возможность выбрать один из разледов Scope flood или Single flood. В случае false, пользователю приходит ответ в виде "Ooops you don't have permission, your telegram id: ваш telegram-id". Такой способ реализован на все команды.

Доступ выдается, добавлением Telegram-id в массив access_list, в файле scripts\keyboards_text_acl.js
Для того, чтобы можно было дать доступ сразу в боте, реализована сцена greater_scene, которая добавляет telegram-id в массив access_list.
Переход в greater_scene, происходит с помощью команды /tima_best (можете поменять):
```
bot.command("tima_best", (ctx) => {
	if (ctx.from.id === Admin telegram id) {
		ctx.reply('Hello Creator, which id wants to take access?')
		ctx.scene.enter('greater_scene')
	} else {
		ctx.replyWithMarkdown("Ooops you don't have permission, your telegram id: `" + ctx.from.id + "`")
	}
})
```
Вместо "Admin telegram id", нужно ввести ваш telegram-id (пример 987654 без скобок).
Порядок предоставление доступа:
1. Запускаем команду /tima_best
2. Вводим Telegram-id, которому хотим дать доступ (происходит добавление telegram-id в массив access_list)
3. Вводим данные пользователя (реализовано для удобства, чтобы знали кому пренадлежит данный telegram-id). При вводе данных, обязательно ставим точку. Пример: Tima.Kokimbaev. Эти данные записываются в файл scripts\logs\Access_list.txt
4. Нажимаем на Выйти (для выхода из сцены)

Но, после перезапуска бота, telegram-id, добавленные таким способом, удаляются с массива, так-как сохранение происходит в оперативной памяти. Для посоянного дуступа, нужно прописовать руками!

### Запуск флуда
Бот запускает флуд вызовом функции start_single_flood или start_scope_flood (находятся в файле \flood\app_flood.js)

### Сбор логов
В папке scripts\logs создаются три файла, где собираются логи.
1. Error_data.txt - файл где собираются логи ошибок от сервисов
2. Flood_data.txt - файл где собираются логи ответов от сервисов
3. Flood_numbers.txt - в данном файле собираются логи, где telegram-id и номер на который осуществлялся flood

## Установка и настройка
1. Скачиваем код
2. Устанавливаем Node.js.
Для Windows https://nodejs.org.
Для Linux https://github.com/nodesource/distributions/blob/master/README.md
3. Переходим в файл бота, и вводим данные команды:
```
npm init -y
npm install telegraf --save
npm install request --save
```
4. В телеграме создаем бота, с помощью BotFather
5. В поле "your telegram-bot token", вводите токен вашего бота в кавычках!
6. Запускаем сам бот, команда: node app.js 
7. Нажимаем на /start. Бот ответит "Ooops you don't have permission, your telegram id: тут ваш telegram-id"
8. Останавливаем бота. В файле \app.js вместо 'Admin Telegram-id' -> пишем ваш telegram-id. В массив access_list в файле scripts\keyboards_text_acl.js добавляем ваш telegram-id. Везде добавляем без кавычек (так-как тип данных должен быть number)
9. На этом все!

### У бота есть 53 сервиса, осуществляющих отправку смс и 5 сервисов, осуществляющих дозвон!

 
