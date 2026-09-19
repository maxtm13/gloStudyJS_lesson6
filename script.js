"use strict"
let randomNumber
let counter = 10
const isNumber = function (params) {
	return !isNaN(parseFloat(params)) && isFinite(params)
};
const getNumber = function (pseudonum) {
	if (!isNumber(pseudonum)) {
		return 0
	}
	let result = pseudonum.match(/\d+(\.\d+)?/)
	return parseFloat(result[0])
}

function botNumber () {
	
	let userNumber = prompt('Угадай число от 1 до 100, число попыток ' + counter )
	if (userNumber === null) {
		alert('Игра окончена');
		return 
	}
	userNumber = getNumber(userNumber)

	if (counter === 0 ) {
		let continueAnswer = confirm('Попытки закончились, хотите сыграть еще?')
		if (continueAnswer) {
			counter = 10;
			return botNumber(counter)
		}
		return;
	}
	if (userNumber === randomNumber) {
			let answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще ? ")
		if (answer) {
			counter = 10
			return botNumber(counter)
		} 
		return
	} else if (userNumber > randomNumber) {
			alert("Загаданное число меньше")
			counter--
		return botNumber(counter)
		} else {
			alert("Загаданное число больше")
			counter--
		return botNumber(counter)  
		}
}
randomNumber = Math.floor(Math.random() * 100) + 1
botNumber(counter)

