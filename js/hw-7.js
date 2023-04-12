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
const getDateEdited = (date) => {
    let dateTime = [date.getFullYear(), date.getMonth(), date.getDate(), date.getDay(), date.getHour(), date.getMinutes(), date.getSeconds()];
    let [year, month, dayInMonth, dayInWeek, hours, minutes, seconds] = dateTime;
}