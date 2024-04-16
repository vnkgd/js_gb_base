// 1

// let userAge = prompt('Ваш возраст?');
// console.log(`Возраст пользователя: ${userAge}`);
// let userName = prompt('Как вас зовут?');
// alert(`Добро пожаловать на сайт ${userName}`);

// 2
// let a = 13;
// let b = 5;
// alert(13 / 5);
// alert(a);
// alert('abc' * 3); //NaN
// alert(1 / 0); //Infinity - бесконечность
// alert(-1 / 0);//-Infinity - бесконечность
// alert('2' * '3');//6

// 3
// alert(13 /* 5);
// let a = '2';
// let b = '3';
// console.log(a + b);
// let userAge = prompt('Ваш возраст?');
// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите первое число'));
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num1);
// либо так
// console.log(`Остаток от деления значений ${num1} и ${num2} равна: ${num1 % num1}`);

// 4
// console.log(String(true)); //true
// console.log('a' + true); //atrue
// console.log(Number(true)); //1
// console.log(true + 1);//2
// console.log(true + true)//2
// console.log(true - true)//0
// console.log(String(true) + Number(true))//true1

// 5
// let userAnswer = prompt('Введите число');
// if (userAnswer > 5) {
//     console.log('Введённое число больше 5');
// }
// else {
//     if (userAnswer < 5) {
//         console.log('Введённое число меньше 5');
//     }
//     else {
//         console.log('Введённое число равно 5');
//     }
// }

// // лучше так. компактнее
// let userAnswer = Number(prompt('Введите число'));
// if (userAnswer > 5) {
//     console.log('Введённое число больше 5');
// } else if (userAnswer < 5) {
//     console.log('Введённое число меньше 5');
// } else {
//     console.log('Введённое число равно 5');
// }

// Тернарный оператор (условие) ? ДА : НЕТ
// (userAnswer > 5) ? alert('Введённое число больше 5') : alert('Введённое число меньше 5');

// let test1 = prompt('Введите число');
// let test2 = prompt('Введите число');
// (test1 === test2) ? alert('Введённые числа равны') : alert('Введённые числа НЕ равны');

// let num1 = prompt('Введите число');
// let num2 = prompt('Введите число');
// (num1 > num2) ? alert(`Минимальным числом является ${num2}`) : alert(`Минимальным числом является ${num1}`);

// let num1 = prompt('Введите число');
// // let num2 = prompt('Введите число');
// (num1 > 0 && num1 < 15) ? alert(`Число ${num1} больше 0 и менье 15 `) : alert(`Другое`);