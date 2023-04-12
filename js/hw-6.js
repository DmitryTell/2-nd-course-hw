'use strict';

//1
// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (i <= arr.indexOf(10)) {
//         console.log(arr[i]);
//     } else {
//         break;
//     }
// }

//2
// console.log(arr.indexOf(4));

//3
// const numbers = [1, 3, 5, 10, 20];
// let str = numbers.join(' ');

// console.log(str);

//4
const newArr = [];

for (let i = 0; i < 3; i++) {
    let subArr = [];

    for (let j = 0; j < 3; j++) {
        subArr.push(1);
    }

    newArr.push(subArr);
}

console.log(newArr);

//5
// const arr = [1, 1, 1];

// arr.push(2, 2, 2);

// console.log(arr);

//6
// const arr = [9, 8, 7, 'a', 6, 5];

// arr.sort().pop();

// console.log(arr);

//7
// const listOfNumbers = [9, 8, 7, 6, 5];
// let num = +prompt('Введите число от 1 до 10');

// alert(listOfNumbers.includes(num) ? 'Есть' : 'Нет');

//8
let string = 'abcdef';

console.log(string.split('').reverse().join(''));

//9
// const arr = [[1, 2, 3,],[4, 5, 6]];
// let result = [];

// for (let subArr of arr) {
//     for (let elem of subArr) {
//         result.push(elem);
//     }
// }

// console.log(result);

//10
// const arr = [3, 5, 8, 6, 4, 9];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

//11
// console.log(arr.map(elem => elem ** 2));

//12
const getLengthWords = (words) => {
    const arr = [];

    for (let word of words) {
        arr.push(word.length);
    }

    return arr;
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//13
console.log([1, -2, 3, 5, -7, 8, -1, 0].filter(elem => elem < 0));

//14
const arr = [];

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 10; i++) {
    arr.push(getRandomNumber(0, 10));
}

const arrEven = arr.filter(elem => elem % 2 == 0);

console.log(arr);
console.log(arrEven);

//15
const numbers = [];

for (let i = 0; i < 6; i++) {
    numbers.push(getRandomNumber(1, 10));
}

console.log(numbers);
console.log(numbers.reduce((sum, elem) => sum + elem) / numbers.length);