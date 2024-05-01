// const productNew = {
//     name: 'Стол',
//     productPrice: 2000,
//     count: 2,
//     userRegistered: false,
//     reg: function () {
//         this.userRegistered = true;
//     },
//     countProduct: function () {
//         if (this.count > 0) {
//             console.log('Вы можете купить данный товар');
//         } else {
//             console.log('Данный товар закончился');
//         }
//     },
//     buyProduct: function () {
//         if (this.userRegistered) {
//             console.log('Товар в корзине');
//         } else {
//             console.log('Вам необходимо зарегистрироваться. Cначала выплонить product.reg');
//         }
//     }
// }
// productNew.buyProduct();
// productNew.reg();
// productNew.buyProduct();
// console.log(product);

// product.link = 'product/linkname.html'

// console.log(product);
// console.log(product.link);
// delete product.link
// console.log(product);

// const productNew = {
//     productImage: 'photo/image.png',
//     productText: 'Крутое кресло'
// }
// console.log(productNew);
// productNew.productText
// let text = productNew.productText;
// console.log(text);
// text
// product.link = 'catalog/linkname.html'
// console.log(product);

// let productSale = product;
// // console.log(productSale);
// productSale.productPrice = 1500;
// // console.log(productSale);
// // console.log(product);

// let productNew2 = product;
// productNew2.text = 'lorem';
// console.log(productSale);
// console.log(product);
// console.log(productNew2);

// const productTest = {
//     text: 'hello',
//     price: 1000
// }
// console.log(productTest);

// for (const key in productTest) {
//     console.log(productTest[key]);
// }

const array = [1, 2, 3, 10, 15];
// console.log(array);
// console.log(array.map(item => item * 2));
// console.log(array);

// const arrayUp = array.map(item => item * 2);
// console.log(arrayUp);

arrayFilter = array.filter(item => item >= 10);
console.log(arrayFilter);

arraySome = array.some(item => item >= 10);
console.log(arraySome);
arraySome2 = array.some(item => item >= 20);
console.log(arraySome2);

arrayReduce = array.reduce((a, b) => a + b);
console.log(arrayReduce);

arrayReduceMid = array.reduce((a, b) => a + b) / array.length;
console.log(arrayReduceMid);

