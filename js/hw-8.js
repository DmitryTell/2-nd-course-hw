'use strict';

//1
const getResult = (arr, callback) => callback(arr);
const sum = (arr) => arr.reduce((sum, elem) => sum + elem);
const mult = (arr) => arr.reduce((mult, elem) => mult * elem);

console.log(getResult ([3, 4, 1, 9], mult));
console.log(getResult ([3, 4, 1, 9], sum));

//2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

console.log(users.sort((a, b) => a.age - b.age));

//3
const each = (arr, callback) => callback(arr);
const reverseArr = (arr) => arr.reverse();
const toNumberArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        isNaN(+arr[i]) ? arr.splice(i, 1) : arr[i] = +arr[i];
    }

    return arr;
}

console.log(each([1, '4', 9, 'two'], reverseArr));
console.log(each([1, '4', false, 9, 'two'], toNumberArr));

//4
const getDate = () => {
    console.log(new Date());
}

let timerId = setInterval(getDate, 3000);

setTimeout(() => {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, 30000);

//5
function calling() {
    console.log('Звоню!');
};

function beeps(callback1, callback2) {
    setTimeout(() => {
        callback1();
        console.log('Идут гудки...');
        callback2();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

beeps(calling, talk);