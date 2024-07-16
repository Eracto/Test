'use strict'; // стандарт es6

a = 5;
console.log(a);

console.log(leftBorderWidth);
var leftBorderWidth = 1;

	let second = 2;

const pi = 3.14;


console.log(4/0);
console.log(4/'asdwdas');

let person = {
	name: "John",
	age: 25,
	isMarried: false
}

console.log(person.name);
console.log(person['name']);

let arr = ['pio','orange.png','applePen.xml'];

console.log(arr[2]);


// 3 4 5;
// 'asdwdas' "asdawd" `asdawdas`;
// true / false;
// Null (Nety);
// undefined (est no pusto);

// to String
console.log('ww' + 'err');
console.log('ww' + 5);
console.log(typeof(5 +'qq'));
console.log('https:/vk.com/catalog/' + 5);

//to number
console.log(typeof(+'5'));
console.log(typeof(5 + +'5'));
console.log(typeof(parseInt('15px', 10)));


// let ans = +prompt('Hello','');

//0 //false
//''//false
//' '//true
//null // false
//undefined // false
//NaN // false
//1 //true

let switcher = null;

if (switcher) {
	console.log('Working..')
}

switcher = 1

if (switcher) {
	console.log('Working..')
}

console.log(typeof(Boolean('5')));

console.log(typeof(!!'5'));

//alert('asqwert'); //при алерте все скрипты останавливаются до нажатия кнопки на модалке

//let answer = confirm('Do you want Hot-Dog?'); //вопрос и кнопки да и отмена

//console.log(answer); //булевое значение тру фолс


//let answer = +prompt('Есть ли вам 18?', 'да');

//console.log(typeof(answer)); // ответ только строка, но с плюсиком промпт станет строкой

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

let incr = 10;
let decr = 10;

console.log(--incr);
console.log(++decr);

// = присваивание
// == сравнение
// === строгое сравнение по типам данных

console.log('2' === 2); // false
console.log('2' == 2); // true

let isChecked = false;
let isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || !isClose);


