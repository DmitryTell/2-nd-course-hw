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

// console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');

//Задание 3
// let d = 20;
// let e = 150;

// console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

//Задание 4
// let a = '2';
// let b = '3';

// alert(Number(a) + Number(b));

//Задание 5
// let monthNumber = +prompt("Введите номер месяца");

// alert(
//     monthNumber == 12 || monthNumber == 1 || monthNumber == 2 ? 'Это зима' :
//     monthNumber >= 3 && monthNumber <= 5 ? 'Это весна' :
//     monthNumber >= 6 && monthNumber <= 8 ? 'Это лето' :
//     monthNumber >= 9 && monthNumber <= 11 ? 'Это осень' : 'Ошибка! Такого месяца не существует'
// );

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         alert('Это зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Это весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Это лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Это осень');
//         break;
//     default:
//         alert('Ошибка! Такого месяца не существует');
// }

//Задание 7
// let num = +prompt('Пожалуйста, введите любое число', 0);

// if (!isNaN(num)) {
//     alert(num % 2 == 0 ? 'Число четное' : 'Число нечетное');
// } else {
//     alert('Ошибка! Вы ввели некорректное значение');
// }

//Задание 8 - 9
// let clientOS = 0;
// let clientDeviceYear = 2015;

// if (clientDeviceYear < 2015) {
//     console.log(clientOS == 0 ? 'Установите облегченную версию приложения для iOS по ссылке' : 'Установите облегченную версию приложения для Android по ссылке');
// } else {
//     console.log(clientOS == 0 ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке');
// }