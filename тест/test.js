let b = "Обычно я спокоен и вывести меня из себя нелегко. Я редко устаю. По сравнению со своими друзьями я считаю себя вполне смелым человеком. Я застенчив не более, чем другие. Мне не хватает уверенности в себе. Порой мне кажется, что я ни на что не годен. У меня бывают периоды такого беспокойства, что я не могу усидеть на месте. Я хотел бы быть таким же счастливым, как другие. Меня весьма тревожат возможные неудачи. Мне приходилось испытывать страх в тех случаях, когда я точно знал, что мне ничто не угрожает. Мне трудно сосредоточиться на работе или на каком-либо задании. Я легко прихожу в замешательство. Почти все время испытываю тревогу из-за кого-либо или из-за чего-либо. Я склонен принимать все слишком всерьез. Раз в месяц или чаще у меня бывает расстройство желудка. Мое материальное положение весьма беспокоит меня. У меня бывали периоды, когда тревога лишала меня сна. Я — человек легко возбудимый. Я часто ловлю себя на том, что меня что-то тревожит. Ожидание меня нервирует."

var space = '.';

var arrayB = b.split(space);

console.log(arrayB[9])

let numberQuestion = 0
let anxietyLevel = 0
let pQuestion = document.getElementById("question")
pQuestion.innerText = 'нажмите кнопку "нет" чтобы начать тест'


let questionYes = () => {
	pQuestion.innerText = arrayB[numberQuestion]
	numberQuestion++
	anxietyLevel += 2
	console.log(numberQuestion)
	stopTest()
}

// let question50_50 = () => {
// 	pQuestion.innerText = arrayB[numberQuestion]
// 	numberQuestion++
// 	anxietyLevel += 1
// 	console.log(numberQuestion)
// 	stopTest()
// }

let questionNo = () => {
	pQuestion.innerText = arrayB[numberQuestion]
	numberQuestion++
	console.log(numberQuestion)
	stopTest()
}

let stopTest = () => {
	if (numberQuestion === 20) {
		let btn = document.getElementById('btn')
		btn.style.display = 'none'
		pQuestion.innerText = 'тест закончен, ваш уровень тревожности: ' + anxietyLevel + ' очков'
		let result = document.getElementById('result')
		result.style.display = 'flex'
	}
	let numberQuestionP2 = document.getElementById('numberQuestionP2')
	numberQuestionP2.innerText = numberQuestion
}



