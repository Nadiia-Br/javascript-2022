// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sPr (a, b){
//     return a*b;
// }


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sRound (r){
//     sR = 3.14 * (r ** 2);
//     return s ;
// }


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCld (h, r){
//     sC = 2 *3.14* r * h;
//     return sC;
// }


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr (...qwe){
//     for (const qweElement of qwe) {
//         console.log(qweElement);
//     }
// }
// arr(5,'smth', true, 12345);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function info(text) {
//     document.write(`<p>${text}</p>`);
// }
// info('testtesttest');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(info) {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${info}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('smth text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(info, quantity) {
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${info}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('smth text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arr (...asd){
//     document.write(`<ul>`);
//     for (let asdElement of asd) {
//         document.write(`<li>${asdElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr(5,'smth', true, 12345, 'information', false, 555, true, 'KYIV');


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function data(...arrInfo) {
//     for (let arrInfoElement of arrInfo) {
//         document.write(`<div> Id -${arrInfoElement.id},  Name - ${arrInfoElement.name}, Age - ${arrInfoElement.age}</div>`);
//
//     }
//     document.write(`<hr>`);
// }
// data({id: 123, name: 'Ira', age:22}, {id: 223, name: 'Sasha', age:25}, {id: 153, name: 'Pasha', age:19}, {id: 423, name: 'Vika', age:20});
// data({id: 111, name: 'Ihor', age:25}, {id: 147, name: 'Serg', age:24}, {id: 192, name: 'Olya', age:18}, {id: 423, name: 'Lera', age:28});