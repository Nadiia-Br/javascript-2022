//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let elementById = document.getElementById('content');
// console.log(elementById);
// console.log(elementById.innerText);


// -- отримує текст з блоку з id "rules"

let rulesById = document.getElementById('rules');
console.log(rulesById.innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший

let change = document.getElementById('content');
console.log(change.innerText = 'okten');


// -- замініть текст параграфа з id 'rules' на будь-який інший

let changeRules = document.getElementById('rules');
console.log(changeRules.innerText = 'ПРАВИЛА');

// -- змініть кожному елементу колір фону на червоний

let children = document.body.children;

// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний