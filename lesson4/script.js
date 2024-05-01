// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

// let count = 0;
// while (count < 3) {
//     console.log('Hello');
//     count++;
// }

// for (let i = 0; i <= 2; i++) {
//     // const element = array[index];
//     console.log('Hello for');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
// }

// let pass;
// let count = 0;
// do {
//     if (count >= 3) {
//         alert('Пароль не верный');
//     }
//     pass = Number(prompt('Введите пароль'));
//     count++;
// } while (pass !== 234);

// // let pass; циклом for не получилось пока.
// let pass = Number(prompt('Введите пароль'));
// for (let count = 0; count >= 3; count++) {
//     pass = Number(prompt('Введите пароль'));
//     pass !== 234;
//     alert('Пароль не верный');
//     if (pass !== 234) {
//         alert('Пароль не верный');
//     } else {
//         alert('Пароль Верный');
//     }
// }

// let count = 0;
// alert(`Вы нажали на кнопку ${count} раз`);
// function counterClicksButton() {.
//     alert(++count);
//     console.log(count);
// }

// const arr = []; //объявляем пустой массив. правильно через const
// arr.push(1); //добавит значение в массив
// console.log(arr);
// let arrNew = []; //не правильно
// arrNew = 5; //затрёт массив и поменяет на значение

// const arr = [1, 3, 'hello'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// const user = [];
// const userName = prompt('Как вас зовут?')
// const userAge = prompt('Сколько вам лет?')
// user.push(userName);
// user.push(userAge);
// console.log(user);

// // push
// const user = [];
// user.push(prompt('Как вас зовут?'));
// user.push(Number(prompt('Сколько вам лет?')));
// console.log(user);

// //pop
// const numbers = [2, 3, 19, 15];
// // console.log(numbers);
// // alert(numbers);
// alert(`Запомни цифры ${numbers}`);
// // console.log(numbers[numbers.length - 1]); //показывает, но не убирает последнее значение из массива
// console.log(numbers.pop()); //показывает и убирает последнее значение из массива
// console.log(numbers);  //2, 3, 19, т.е. без последнего значения 15

// split
// const word = 'example';
// // console.log(word.split());
// // console.log(word.split());
// const arrWord = word.split('');
// const upWord = arrWord.pop();
// // console.log(arrWord.pop());
// // console.log(upWord.toLocaleUpperCase());
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join(''));

// // Метод shift
// const filePath = "C:/projects/bestProject/src/images/background-image.png";
// const diskName = filePath.split('/').shift(); // Разделим строку на составляющие и превратим её в массив по средствам split('/'), а потом уже вызовим новый метод shift()
// console.log(diskName); // "C:"
// const diskNameOnly = diskName.split('').shift();
// console.log(diskNameOnly) // "C"

// // Метод slice
// const arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.slice(0, 2));
// console.log(arr.slice(1, 2));

// let a = 5;
// const arr = [1, 2, 3, 4];
// arr.push(a);
// console.log(arr);


// const arr = [5, 2, 3, 7, 19, 7, 13, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }

// console.log(arr.indexOf('3'));

const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswers = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];

    if (element == userAnswers) {
        console.log('Молодец');
        break;
    } else {
        continue;
    }
}