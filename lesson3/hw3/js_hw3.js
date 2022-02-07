// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// let num = [2000, 5, 25, 2021, 9];
// let str = ['Kyiv', 'Lviv', 'okten', 'js', 'html'];
// let arr = [true, 'Kyiv', 2021, false, 555];
// console.log(num);
// console.log(str);
// console.log(arr);
//


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let mass = [];
// mass[0]=5;
// mass[1]='dream';
// mass[2]=true;
// mass[3]=25;
// mass[4]='Kyiv';
// mass[5]=2000;
// console.log(mass);
//


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>test</div>`);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>test ${i}</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i =0;
// while(i<20){
//     document.write(`<h1>test test test</h1>`);
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i =0;
// while(i<20){
//     document.write(`<h1>test test test ${i}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 22, 333, 4, 5, 67, 78, 89, 9, 10];
// for (const number of arr) {
//     console.log(number);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let txt = ['aaa', 'bbb', 'xyz', 'zzz', 'if', 'lviv', 'kyiv', 'che', 'nnn', 'okten'];
// for (let string of txt) {
//     console.log(string);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mix = [true, 555, false, 'lviv', 'kyiv', 25, true, 'usa', 10 , 100];
// for (let i = 0; i < mix.length; i++) {
//     let mix1 = mix[i];
//     console.log(mix1);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let mix = [true, 555, false, 'lviv', 'kyiv', 25, true, 'usa', 10 , 100];
// for (let i = 0; i < mix.length; i++) {
//     let mix1 = mix[i];
//     if (typeof mix1 === "boolean"){
//         console.log(mix1);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let mix = [true, 555, false, 'lviv', 'kyiv', 25, true, 'usa', 10 , 100];
// for (let i = 0; i < mix.length; i++) {
//     let mix1 = mix[i];
//     if (typeof mix1 === "number"){
//         console.log(mix1);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mix = [true, 555, false, 'lviv', 'kyiv', 25, true, 'usa', 10 , 100];
// for (let i = 0; i < mix.length; i++) {
//     let mix1 = mix[i];
//     if (typeof mix1 === "string"){
//         console.log(mix1);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = true;
// arr[1] = 555;
// arr[2] = 'html';
// arr[3] = 25;
// arr[4] = 'js';
// arr[5] = 777;
// arr[6] = false;
// arr[7] = 2000;
// arr[8] = true;
// arr[9] =  'usa';
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log(`крок ${i}`);
//     document.write(`<h3>крок ${i}</h3>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//     console.log(`крок ${i}`);
//     document.write(`<h3>крок ${i}</h3>`);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i=i+2) {
//     console.log(`крок ${i}`);
//     document.write(`<h3>крок ${i}</h3>`);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i%2 === 0){
//     console.log(`крок ${i}`);
//     document.write(`<h3>крок ${i}</h3>`);}
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i%2 !== 0){
//         console.log(`крок ${i}`);
//         document.write(`<h3>крок ${i}</h3>`);}
// }