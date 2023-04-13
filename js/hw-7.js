'use strict';

//1
let str = 'js';

console.log(str.toUpperCase());

//2
const searchStart = (arr, str) => {
    let reg = new RegExp('^' + str, 'i');
    let result = [];

    for (let elem of arr) {
        if (reg.test(elem)) {
            result.push(elem);
        }
    }

    return result;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//4
let numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//5
const getRandomNumber = (min, max) => console.log(Math.round(Math.random() * (max - min)) + min);

getRandomNumber(1, 10);

//6
const getArray = (num) => {
    let result = [];

    for (let i = 0; i < Math.floor(num / 2); i++) {
        result.push(Math.round(Math.random() * num));
    }

    return result;
}

console.log(getArray(7));
console.log(getArray(12));

//7
const getRandomInt = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    return Math.round(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(5, 2));

//8
console.log(new Date());

//9
let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//10
const getZeroBefore = (num) => String(num).length < 2 ? '0' + num : num;
const getDate = (year, month, day, hours, minutes, seconds) => {
    let date = new Date(year, month - 1, day, hours, minutes, seconds);
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    return `Дата: ${getZeroBefore(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()} - это ${weekDays[date.getDay()]}\nВремя: ${getZeroBefore(date.getHours())}:${getZeroBefore(date.getMinutes())}:${getZeroBefore(date.getSeconds())}`;
}

console.log(getDate(2015, 3, 24, 1, 0, 5));

//11
function playGuessWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);

    alert(fruits);

    let firstAnswer = prompt('Назовите первое слово');
    let secondAnswer = prompt('Назовите последнее слово');
    let checkFirst = new RegExp('^' + firstAnswer, 'i');
    let checkSecond = new RegExp('^' + secondAnswer, 'i');

    if (checkFirst.test(fruits[0]) && checkSecond.test(fruits[fruits.length - 1])) {
        alert('Поздравляю! Вы угадали!');
    } else if (checkFirst.test(fruits[0]) || checkSecond.test(fruits[fruits.length - 1])) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}