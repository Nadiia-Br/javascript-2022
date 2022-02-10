//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3){
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1 ){
//         console.log(num2);
//     } else if (num3 < num1 && num3 < num2 ){
//         console.log(num3);
//     }
// }
//
// numbers(10, 4, 16);
// numbers(20, 40, 50);
// numbers(-5, -20, 0);
// numbers(4, 18, -36);
// numbers(94, 1000, 5000);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numbers(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3){
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1 ){
//         console.log(num2);
//     } else if (num3 > num1 && num3 > num2 ){
//         console.log(num3);
//     }
// }
//
// numbers(10, 4, 16);
// numbers(20, 40, 50);
// numbers(-5, -20, 0);
// numbers(4, 18, -36);
// numbers(94, 1000, 5000);


// - створити функцію яка повертає найбільше число з масиву

// function numMax(...asd) {
//             let maxNumber = asd[0];
//     for (let asdElement of asd) {
//         if (asdElement > maxNumber){
//             maxNumber=asdElement;
//         }
//     }
//     return maxNumber;
// }
// let numMax1 = numMax(5,34,-2,48,1000,55);
// console.log(numMax1);
// let numMax2 = numMax(148, 345, 876, 150, 1000);
// console.log(numMax2);
// let numMax3 = numMax(64, 78, 23, 10);
// console.log(numMax3);


// - створити функцію яка повертає найменьше число з масиву

// function numMin(...asd) {
//     let minNumber = asd[0];
//     for (let asdElement of asd) {
//         if (asdElement < minNumber){
//             minNumber=asdElement;
//         }
//     }
//     return minNumber;
// }
// let numMin1 = numMin(5,34,-2,48,1000,55);
// console.log(numMin1);
// let numMin2 = numMin(4, 148, 345, 876, 150, 1000);
// console.log(numMin2);
// let numMin3 = numMin(64, 78, 23, 10);
// console.log(numMin3);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arrNumber(...numbers){
//     let sum = 0;
//     for (let number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// let arrNumber1 = arrNumber(5,34,-2,48,1000,55);
// console.log(arrNumber1);
// let arrNumber2 = arrNumber(4, 148, 345, 876, 150, 1000);
// console.log(arrNumber2);
// let arrNumber3 = arrNumber(64, 78, 23, 10);
// console.log(arrNumber3);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function serNumber(...numbers){
//     let sum = 0;
//     for (let number of numbers) {
//         sum = sum + number;
//     }
//     return sum/numbers.length;
// }
// let serNumber1 = serNumber(5,34,-2,48,1000,55);
// console.log(serNumber1);
// let serNumber2 = serNumber(4, 148, 345, 876, 150, 1000);
// console.log(serNumber2);
// let serNumber3 = serNumber(64, 78, 23, 10);
// console.log(serNumber3);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function num(numbers) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const numb of arguments) {
//         if (numb > max) {
//             max = numb;
//         }
//         if (numb < min) {
//             min = numb;
//         }
//     }
//     console.log('максимальне число = ', max);
//     return min;
// }
// document.write(`<div>мінімальне число =  ${num(5,34,-2,48,1000,55)}</div>`);
// document.write(`<div>мінімальне число =  ${num(4, 148, 345, 876, 150, 1000)}</div>`);
// document.write(`<div>мінімальне число =  ${num(64, 78, 23, 10)}</div>`);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomizer (length) {
//     let asd = [];
//     for (let i = 0; i < length; i++){
//         asd.push(Math.round(Math.random() * 100));
//     }
// return asd;
// };
// document.write(`<div>${randomizer(5)}</div>`);
// document.write(`<div>${randomizer(100)}</div>`);
// document.write(`<div>${randomizer(3)}</div>`);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomizer (length, limit) {
//     let asd = [];
//     for (let i = 0; i < length; i++){
//         asd.push(Math.round(Math.random() * limit));
//     }
//     return asd;
// };
// document.write(`<div>${randomizer(5, 100)}</div>`);
// document.write(`<div>${randomizer(100,10)}</div>`);
// document.write(`<div>${randomizer(3,1000)}</div>`);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function zvorotn(mass) {
//     let zvorotn = [];
//     for (let i =0, ri = mass.length - 1; i < mass.length; i++, ri--) {
//         zvorotn[ri] = mass[i]
//     }
//     return zvorotn;
// }
// console.log(zvorotn([1,2,3]));
// console.log(zvorotn([100, 200, 300]));
// console.log(zvorotn([5, 10 , 15]));
