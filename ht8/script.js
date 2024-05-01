// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     // console.log(i);
//     if (i === 0) {
//         console.log(`${i} – это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} – четное число`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} – нечетное число`);
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// let arr = [Math.random(0, 9)];

// console.log(arr);
// console.log(Math.random());

// let arr = []
// for (let i = 0; i < 9; i++) {
//     arr.push(Math.random(0, 9))
//     // array.push(0 + Math.random() * ((9 - (-9)) + 1))
// }
// console.log(arr);

// функция генерации случайных чисел
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let randomInt = getRandomInt(0, 9); //получаем рандомное число
// console.log(randomInt);

//создаём массив с помощью случайных функции генерации случайных чисел
// let arr = []
// for (let i = 0; i < 5; i++) {
//     arr.push(getRandomInt(0, 9)) //генерим числа от 0 до 9 и вставляем в массив
// }
// console.log(arr);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(`Сумма чисел массива: ${sum}`);

// const min = (values) => values.reduce((x, y) => Math.min(x, y));
// console.log(`Минимальное число массива: ${min(arr)}`);

// for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(3)) {
//         console.log('Число 3 в массиве есть');
//     } else {
//         console.log('Числа 3 в массиве нет');
//     }
// }


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// let string = 'x';
// for (let i = 0; i <= 20; i++) {
//     string = 'x' + string;
//     console.log(string);
// }
// console.log(string);
