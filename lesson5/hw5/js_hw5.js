// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника

// let sPr = (a,b) =>{
//     return a*b;
// }
// document.write(`<div>S прямокутника =   ${sPr(10, 15)}</div>`);
// document.write(`<div>S прямокутника =   ${sPr(4, 25)}</div>`);
// document.write(`<div>S прямокутника =   ${sPr(36, 48)}</div>`);


// - створити функцію яка обчислює та повертає площу кола

// let sRound = (r) =>{
//     return (r ** 2 * 3.14) ;
// }
// document.write(`<div>S кола =  ${sRound(5)}</div>`);
// document.write(`<div>S кола =  ${sRound(16)}</div>`);
// document.write(`<div>S кола =  ${sRound(50)}</div>`);


// - створити функцію яка обчислює та повертає площу циліндру

// let sCilindr = (r, h) =>{
//     return (2 * 3.14 * r * h) ;
// }
// document.write(`<div>S циліндра =  ${sCilindr(5,10)}</div>`);
// document.write(`<div>S циліндра =  ${sCilindr(48,60)}</div>`);
// document.write(`<div>S циліндра =  ${sCilindr(16,32)}</div>`);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = (...qwe) =>{
//     for (const qweElement of qwe) {
//         console.log(qweElement);
//     }
// }
// arr(5,'smth', true, 12345);
// arr(6, 8, 9);
// arr('aaa', 'bbb', true, 555);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let data = (text) =>{
//     document.write(`<p>${text}</p>`);
// }
// data('smth text');
// data('info');
// data('arrow function');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (info) =>{
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${info}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('smth text');
// list('harry');
// list('simpsons');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (info, quantity) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${info}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('smth text', 3);
// list('harry',4);
// list('simpsons',10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = (...asd) =>{
//     document.write(`<ul>`);
//     for (let asdElement of asd) {
//         document.write(`<li>${asdElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr(5,'smth', true, 12345, 'information', false, 555, true, 'KYIV');
// arr(5,'smth', true, 12345, 'information', false, 555, true, 'KYIV');
// arr(5,'smth', true, 12345, 'information', false, 555, true, 'KYIV');


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let  data = (...arrInfo) => {
//     for (let arrInfoElement of arrInfo) {
//         document.write(`<div> Id -${arrInfoElement.id},  Name - ${arrInfoElement.name}, Age - ${arrInfoElement.age}</div>`);
//
//     }
//     document.write(`<hr>`);
// }
// data({id: 123, name: 'Ira', age:22}, {id: 223, name: 'Sasha', age:25}, {id: 153, name: 'Pasha', age:19}, {id: 423, name: 'Vika', age:20});
// data({id: 111, name: 'Ihor', age:25}, {id: 147, name: 'Serg', age:24}, {id: 192, name: 'Olya', age:18}, {id: 423, name: 'Lera', age:28});