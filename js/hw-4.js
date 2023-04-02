//Задание 1
// let i = 0;

// while (i < 2) {
//     console.log('Привет');
//     i++;
// }

//Задание 2
// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

//Задание 3
// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// }

//Задание 4
// let obj = {
//     Коля: 200,
//     Вася: 300,
//     Петя: 400
// };

// for (let key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов.`);
// }

//Задание 5
// let num = 0;

// for (let n = 1000; n >= 50; n /= 2) {
//     num++;
// }

// console.log(num);

//Задание 6
let friday = 7;

for (let i = 1; i <= 31; i++) {
    if (i === friday) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
        friday += 7;
    }
}