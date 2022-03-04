//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let elementById = document.getElementById('main_header');
elementById.classList.add('dec-2021');
elementById.style.background='cornflowerblue';
console.log(document);


// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
console.log(ul);
ul[0].style.width = '400px';
ul[0].style.border = '4px solid orange';


// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsByClassName = document.getElementsByClassName('linkList');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.border = '2px solid green';
    elementsByClassNameElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

    let newEl = document.getElementsByClassName('listElement2');
    console.log(newEl);
    newEl[0].innerHTML = 'smth text';

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLi = document.getElementsByTagName('li');
for (let allLiElement of allLi) {
    allLiElement.style.background='silver';
}


// f) отримує всі елементи 'a' та додає їм клас anchor

let elA = document.getElementsByTagName('a');
for (let elAElement of elA) {
    elAElement.classList.add('anchor');
}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let elAElement of elA) {
    if (elAElement.innerText === 'link3'){
        elAElement.style.fontSize = '40px';
    }
    
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let elAElement of elA) {
    elAElement.classList.add(`element_${elAElement.innerText}`);
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sHead = document.getElementsByClassName('sub-header');
// for (const sH of sHead) {
//     sH.style.background = prompt('введіть колір' );
// }




// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let sHead = document.getElementsByClassName('sub-header');
// for (const sH of sHead) {
//     if (sH.innerText === 'content 2 segment') {
//         sH.style.color = prompt('введіть колір');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let change = document.getElementsByClassName('content_1');
// change[0].innerText = prompt('vvedit text');


// l) отримати елементи p та змінити їм padding на 20px

let elP = document.getElementsByTagName('p');
for (let P of elP) {
    P.style.padding = '20px';
}



// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

document.getElementsByClassName('text2')[0].innerText = 'dec-2021';






