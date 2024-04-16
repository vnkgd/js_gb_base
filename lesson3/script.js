// alert('Привет, Мир.');
// function helloName(name) {
//     console.log(name);
// }

// helloName('John');

// let count = 5;

// function counter() {
//     // let count = 0;
//     return count++;
// }

// counter();
// counter();

// console.log(count);

// let age = Number(prompt('Сколько вам лет?'))

// const lvlUpAge = () => age + 5;

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// function hello() {
//     console.log('Hello function');
// }

// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// // const result = sum(2, 5);
// // console.log(result);
// console.log(sum(2, 5));

// const salary = (money) => {
//     money = money * 0.87; //money - money * 0.13
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько зарабатываешь?'))

// let monyMonth = salary(userMoney)
// // console.log(salary(userMoney));
// console.log(`Для расходов можно использовать ${salary(userMoney)}`);

// console.log(`Теперь на еду можно потратить не более чем ${monyMonth * 0.3}`);
// sayHello();


// function sayHello() {
//     // return 5;
//     alert('Привет');
//     alert('Нажали на кнопку');
// }

// hello2();
// const hello2 = () => {
//     alert('Привет2');

// let userAnswer = prompt('Зимой и летом одним цветом');
// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }

// let userAnswer2 = prompt('Сидит дет, во сто шуб одет, кто его раздевает, тот слёзы проливает');
// if (userAnswer2 === 'лук') {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }



function askQuestion(answer, question) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угадал');
    }
}

// askQuestion('лук', 'Сидит дет, во сто шуб одет, кто его раздевает, тот слёзы проливает');
// askQuestion('елка', 'Зимой и летом одним цветом');

function puzzle() {
    askQuestion('лук', 'Сидит дет, во сто шуб одет, кто его раздевает, тот слёзы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом');
}

