// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Каждый охотник желает знать';
// let stringToarray = str.split(" ")
// console.log(stringToarray);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// let delete_characters =
// document.writeln(delete_characters(str, 7));


// let str = 'Каждый охотник желает знать';
// let delete_characters = function (str, index){
//     return str.substr(0, index);
// }
// console.log(delete_characters(str,15)); //or
//
// let str2 = str.substr(0,20);
// console.log(str2);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let str2 = str.split(' ').join('-').toUpperCase();
//     return str2;
// }
// console.log(insert_dash(str));
// document.write(str);



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let smth = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
//
// console.log(smth('kyiv'));
// console.log(smth('okten'));
// console.log(smth('js'));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) => {
//     str1=str.split(' ');
//     return str1.map(value => value.charAt(0).toUpperCase()+ value.slice(1)).join(' ');
// };
// console.log((capitalize('the Simpsons is known for its wide ensemble of main and supporting characters ')));
// console.log(capitalize('homer is one of the main characters'));