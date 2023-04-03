'use strict';

//1
function getMin(a, b) {
    return a < b || a == b ? a : b;
}

console.log(getMin(13, 5));

//2
function checkNumber(num) {
    return num % 2 == 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checkNumber(23));

//3.1
function getSquareNumber(num) {
    console.log(num ** 2);
}

getSquareNumber(6);

//3.2
const getSquare = num => num ** 2;

console.log(getSquare(5));

//4
function checkAge() {
    let age = +prompt('Сколько вам лет?');

    if (age < 0 || isNaN(age)) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

// checkAge();

//5
function isNumber(a, b) {
    return isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;
}

console.log(isNumber('6', 5));

//6
function chooseNumber() {
    let n = prompt('Введите число');

    if (n !== '' && isFinite(n) && n !== null) {
        alert(`${n} в кубе равняется ${n ** 3}`);
    } else {
        alert('Переданный параметр не является числом');
    }
}

// chooseNumber();

//7
const Pi = 3.14;

function getArea() {
    return Pi * this.radius ** 2;
}

function getPerimeter() {
    return this.radius * 2 * Pi;
}

let circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter
};
let circle2 = {
    radius: 9,
    area: getArea,
    perimeter: getPerimeter
};

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());