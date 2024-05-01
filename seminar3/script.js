// 1
// Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)

// function askQuestion() {
//     const userAnswer1 = prompt('Напиши пожалуйста ФИО');
//     const userAnswer2 = prompt('Сколько тебе лет?');
//     console.log(`Ваше ФИО: ${userAnswer1} и вам ${userAnswer2} лет`);
// }



// askQuestion();

// 2
// Создайте функцию которая возводит переданное число в квадрат

// function squaring() {
//     const userAnswer1 = Number(prompt('Введите число, я возведу его в квадрат'));
//     console.log(`Число: ${userAnswer1} в квадрате, будет: ${Math.pow(userAnswer1, 2)}`);
// }
// squaring();
// либо (userAnswer1 ** 2)

// 3.
// Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.


// function sign() {
//     const userAnswer1 = Number(prompt('Введите число, я скажу, отрицательное оно или положительное'));
//     if (Math.sign(userAnswer1) === 1) {
//         console.log(`Число: ${userAnswer1} положительное +++`);
//     } else {
//         console.log(`Число: ${userAnswer1} отрицательное ---'`);
//     }
// }
// sign();

// либо (userAnswer1 >= 0)


// Задание 2
// 1
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.

// function summ() {
//     const userAnswer1 = Number(prompt('Введите число 1, из 3, я их сложу'));
//     const userAnswer2 = Number(prompt('Введите число 2, из 3'));
//     const userAnswer3 = Number(prompt('Введите число 3, из 3'));
//     console.log(`Сумма введённых чисел: ${userAnswer1 + userAnswer2 + userAnswer3}`);
// }
// summ();

// 2
// С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function summ2() {
//     console.log(`Сумма введённых чисел: ${param1 + param2 + param3}`);
// }
// summ2();

// // 3
// // Дана функция
// function func(num = 5) {
//     console.log(num * num);
// }
// // Расскажите, каким будет результат каждого из вызовов функции.
// func(2); //4
// func(3); //9
// func(); //25

// Задание 3
// 1
// Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа.С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.

// 2
// Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции
// function unsquaring() {
//     const userAnswer1 = Number(prompt('Введите число, я скажу квадратный корень из этого числа'));
//     console.log(`Квадратный корень из числа: ${userAnswer1}, будет: ${Math.sqrt(userAnswer1)}`);
// }
// unsquaring();
// // либо
// function unsquaring(num) {
//     return Math.sqrt(num);
// }
// console.log(`Квадратный корень из числа: ${Math.round(unsquaring(32))}`);

// function min() {
//     const userAnswer1 = Number(prompt('Введите число 1 из 2, я скажу какое из них меньше'));
//     const userAnswer2 = Number(prompt('Введите число 2'));
//     if (userAnswer1 < userAnswer2) {
//         console.log(`Минимальное число: ${userAnswer1}`);
//     } else {
//         console.log(`Минимальное число: ${userAnswer2}`);
//     }
// }
// min();


// Задание 4
// 1.
// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

// function dayString() {
//     let day = Number(prompt('Введите число от 1 до 7, я скажу день недели'));
//     if (day === 1) {
//         console.log('Понедельник');
//     } else if (day === 2) {
//         console.log('Вторник');
//     } else if (day === 3) {
//         console.log('Среда');
//     } else if (day === 4) {
//         console.log('Четверг');
//     } else if (day === 5) {
//         console.log('Пятница');
//     } else if (day === 6) {
//         console.log('Суббота');
//     } else if (day === 7) {
//         console.log('Воскресенье');
//     } else if (day > 7 | day < 1) {
//         console.log('Я же просил, от 1 до 7...');
//     }
// }
// dayString();

//либо так
// function dayOfWeek(day) {
//     switch (day) {
//         case 1:
//             return 'Понедельник';
//             break;
//         case 2:
//             return 'Вторник';
//             break;
//         case 3:
//             return 'Среда';
//             break;
//         case 4:
//             return 'Четверг';
//             break;
//         case 5:
//             return 'Пятница';
//             break;
//         case 6:
//             return 'Суббота';
//             break;
//         case 7:
//             return 'Воскресенье';
//             break;
//         default:
//             return 'Число не от 1 до 7'
//             break;
//     }
// }

// console.log(dayOfWeek(8));

// // Текущий день недели
// let days = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
// ];
// var d = new Date();
// var n = d.getDay();
// console.log(days[n]);


// 2
// Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

function dayTime() {
    let name = String(prompt('Как вас зовут?'));
    let Data = new Date();
    let time = Data.getHours(); //текущее вермя
    // let time = 6; //для теста
    if (time > 6 && time <= 12) {
        console.log(`Доброе утро ${name}`);
    } else if (time > 12 && time <= 18) {
        console.log(`Добрый день ${name}`);
    }
    else if (time > 18 && time <= 24) {
        console.log(`Добрый вечер ${name}`);
    } else if (time > 0 && time <= 6) {
        console.log(`Доброй ночи ${name}`);
    }
}
dayTime();