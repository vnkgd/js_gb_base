// Задание 1
// 1.
// Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const digitalObject = {
//     key1: 'Понедельник',
//     key2: 'Вторник',
//     key3: 'Среда',
//     key4: 'Четверг',
//     key5: 'Пятница',
//     key6: 'Суббота',
//     key7: 'Воскресенье'
// }

// console.log(digitalObject.key2); //так не работает с цифрами в ключах
// // console.log(digitalObject[key2]); //так не работает с буквами в ключах
// console.log(digitalObject['key2']); //так работает с буквами в ключах

// Либо так:
// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }

// console.log(week[2]); //так не работает с буквами в ключах
// console.log(week.2); //так не работает с цифрами в ключах

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// const user = {
//     name: 'Игорь',
//     surname: 'Иванов',
//     age: 32
// }

// console.log(user.surname + '-' + user.name + '-' + user.age);
// либо так
// console.log(`${user.surname} - ${user.name} - ${user.age});


// // 3. Добавьте в объект user свойство отчество, которое
// // пользователь должен ввести с клавиатуры

// user.patranуmic = prompt('Введите отчество');

// console.log(user);

// // Удалите свойство surnam
// delete user.surname
// console.log(user);


// Задание 2
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const obj = {};

// if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = arr2[i];
//     }
// } else {
//     console.log('Массивы не равны по длине');
// }

// console.log(obj);


// 2.
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
// const obj = {x: 1, y: 2, z: 3};

// const obj = { x: 1, y: 2, z: 3 };
// // console.log(obj);
// for (const item in obj) {
//     // console.log(item);//ключи
//     // console.log(obj.item);//Значения. но мы помним, что так не работает с цифрами
//     // console.log(obj['item']);//Значения. так обращаемся к тексту
//     // console.log(obj[item] ** 2);//Значения возводим в квадрат
//     obj[item] = obj[item] ** 2;
// }
// console.log(obj);

// const array = [1, 2, 3, 10, 15];
// // console.log(array);
// // console.log(array.map(item => item * 2));
// // console.log(array);

// const array = [1, 2, 3, 10, 15];
// console.log(array);
// console.log(array.map(item => item * 2));
// console.log(array);

// const arrayUp = array.map(item => item * 2);
// console.log(arrayUp);

// console.log(obj);
// console.log(obj.map(item => item * 2));
// console.log(obj);

// for (const key in obj) {
//     console.log(key + ": " + obj[key]);
//     obj => key * 2;
//     console.log(obj)
// }

// Задание 3
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// Найдите сумму элементов приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// // const summ = 0; //Ошибка Uncaught TypeError: Assignment to constant variable.
// let summ = 0;
// for (const keyUp in obj) {
//     // console.log(obj[keyUp]);//наш искомый объект. объекты в объекте
//     for (const keyIn in obj[keyUp]) {
//         // console.log(obj[keyUp][keyIn]);//только значения объектов в объекте
//         summ += obj[keyUp][keyIn];
//     }
// }
// console.log(summ);
// // либо так
// // Object.values(obj);
// // console.log(Object.values(obj)); //циклом лучше

// Задание 4
// 1. Создайте объект riddles

// const riddles = {
// }
// // console.log(riddles);
// // 2. Добавьте в объект riddles свойства question, answer

// riddles.question = 'Зимой и летом одним цветом?';
// riddles.answer = 'Ёлка';

// console.log(riddles);

// // 3. создайте метод askQuestion который спрашивает у пользователя
// // вопрос question и сравнивает ответ с answer
// askQuestion = prompt('Зимой и летом одним цветом?');

// if (askQuestion === riddles.answer) {
//     console.log(`Угадал, правильный ответ ${riddles.answer} `);
// } else {
//     console.log(`Не угадал = проиграл`);
// }

// * По желанию, создать 2 подсказки, если пользователь ответил
// неверно
//clue - 2 подсказки
// riddles.clue = 'Растёт в лесу';
// riddles.clue2 = 'Наряжаем на новый год';


// либо так:
const riddles = {
    question: 'Зимой и летом одним цветом?',
    answer: 'елка',
    askQuestion() {
        let userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLocaleLowerCase();
        if (userAnswer === this.answer) {
            console.log(`Угадал, правильный ответ ${this.answer}`);
        } else {
            console.log(`Не угадал = проиграл`);
        }
    }
}

riddles.askQuestion();