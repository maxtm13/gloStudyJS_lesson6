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

	
	if (userNumber === randomNumber) {
			let answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще ? ")
		if (answer) {
			return botNumber(10)
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
// randomNumber = 25
botNumber(counter)

