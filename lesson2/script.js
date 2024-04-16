// 1 === '1'
// 1 == false
// null !== 1
// console.log(null !== 1);
// let userAnswer = prompt('Напиши что нибудь');
// if (userAnswer === '') {
//     console.log('Пусто');
// }
// else {
//     if (userAnswer === 'елка') {
//         alert('Поздравляю');
//     }
//     else {
//         alert('Не угадал');
//     }
// }

// if (userAnswer === '') {
//     alert('Пустое значение');
// }
// else if (userAnswer === 'елка') {
//     alert('Поздравляю');
// }
// else {
//     alert('Не угадал');
// }

// Тернарный оператор (условие) ? ДА : НЕТ
// (userAnswer === 'елка') ? alert('Поздравляю') : alert('Не угадал');
// alert((2 > 3) 'правильно' : 'не правильно')
// alert((userAnswer === 'елка') ? ('Поздравляю') : ('Не угадал'))

// if (userAnswer.toLowerCase() === 'елка') {
//     alert('Поздравляю');
// }
// else {
//     alert('Не угадал');
// }

// let pass = prompt('Введите пароль') //'123'
// pass = Number(pass); //123 преобразовать к числоу
// // pass = String(pass); //'123' преобразовать к строке

// if (pass === 123) {
//     alert('Переходим дальше')
// } else {
//     alert('Нельзя')
// }

let pass = Number(prompt('Введите пароль'));
alert(((pass === 123) ? 'Переходим дальше' : 'Нельзя'));
