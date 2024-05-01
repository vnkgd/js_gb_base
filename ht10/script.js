// // Задание 1
// // Дан объект numbers.
// // Необходимо в консоль вывести все значения больше или равные 3.

// // const numbers = {
// // keyin1: 1,
// // keyin2: 2,
// // keyin3: 3,
// // keyin4: 4,
// // keyin5: 5,
// // keyin6: 6,
// // keyin7: 7,
// // }

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
//     author: "John", // 1. вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author); //John
// console.log(post.comments[0].rating.dislikes); //2
// console.log(post.comments[1].userId); //5
// console.log(post.comments[1].text); //lorem ipsum 2

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(function (elem) {
//     // console.log(elem.price);
//     elem.price = elem.price - (elem.price * 0.15);
// либо так
// products.forEach(product => product.price = product.price * 0.85);
// });
// console.log(products);

// Задание 4
// Дан массив с объектами
// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// console.log(products.filter(product => 'photos' in product && product.photos.length !== 0));
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
// console.log(products.sort((product1, product2) => product1.price - product2.price));


// **Задание 5**
// Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const obj = {};

if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        obj[en[i]] = ru[i];
    }
} else {
    console.log('Массивы не равны по длине');
}

console.log(obj);