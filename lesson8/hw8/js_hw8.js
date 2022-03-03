//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let elementById = document.getElementById('content');
console.log(elementById);
console.log(elementById.innerText);


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
// -- змініть кожному елементу колір тексту на синій

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'red';
//     child.style.color = 'blue';
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(document.getElementById('rules').classList);

// let cl = document.getElementById('rules');
// console.log(cl.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const rule of fc_rules) {
    rule.style.background ='red';
}