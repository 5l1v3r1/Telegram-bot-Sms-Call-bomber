module.exports = {
	access_list: [],

	first_keyboard: [
		[{text: 'Single flood', callback_data: 'single'}, {text: 'Scope flood', callback_data: 'scope'}]
	],

	second_keyboard: [
		[{text: 'Главное меню', callback_data: 'Main_menu'}]					
	],

	third_keyboard: [
		[{text: 'Запустить', callback_data: 'run'}, {text: 'Отменить', callback_data: 'cancel'}]
	],

	fourth_keyboard: [
		[{text: 'Single flood', callback_data: 'single'}]					
	],

	fifth_keyboard: [
		[{text: 'Scope flood', callback_data: 'scope'}]					
	],

	main_text: ` 
⚜️* Single flood: * Данный раздел позволяет запустить flood на один номер

🔱* Scope flood: * Данный раздел позволяет запустить flood одновременно на несколько номеров
	`,

	single_text: `
⚜️* Single flood* - flood на один номерʕᵔᴥᵔʔ

*Введите номер*, на который хотите запустить flood❗️
Можете ввести номер в любом формате
	`,

	scope_text: `
🔱* Scope flood* - одновременный flood на несколько номеров (✯◡✯)
	
*Введите номера*, на которые хотите запустить flood❗️
*Важно*, отделите номера между собой запятой, и номера можете ввести в любом формате❗️
Пример: +7(777) 666-55-44, +77776665544, 87776665544, ... 
	`
}