//Задание 1
// let password = 'password4example';
// let userPassword = prompt('Введите пароль');

// if (password === userPassword) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

//Задание 2
// let c = 2;

// (c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

//Задание 3
// let d = 20;
// let e = 150;

// (d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

//Задание 4
// let a = '2';
// let b = '3';

// alert(Number(a) + Number(b));

//Задание 5
let monthNumber = +prompt("Введите номер месяца");

switch (monthNumber) {
    case 1:
        alert('Январь');
        break;
    case 2:
        alert('Февраль');
        break;
    case 3:
        alert('Март');
        break;
    case 4:
        alert('Апрель');
        break;
    case 5:
        alert('Май');
        break;
    case 6:
        alert('Июнь');
        break;
    case 7:
        alert('Июль');
        break;
    case 8:
        alert('Август');
        break;
    case 9:
        alert('Сентябрь');
        break;
    case 10:
        alert('Октябрь');
        break;
    case 11:
        alert('Ноябрь');
        break;
    case 12:
        alert('Декабрь');
        break;
    default:
        alert('Ошибка!');
        break;
}