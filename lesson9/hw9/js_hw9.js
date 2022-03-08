// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let elDiv = document.createElement('div');
elDiv.innerText='okten';
elDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
elDiv.style.background='lightgreen';
elDiv.style.color='orange';
elDiv.style.fontSize='150px';
document.body.appendChild(elDiv);

let cloneDiv = elDiv.cloneNode(true);
document.body.appendChild(cloneDiv);





// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main','Products','About us','Contacts']
let classMenu = document.getElementsByClassName('menu')[0];
for (let elArr of arr) {
    let crLi = document.createElement('li');
    crLi.innerText = elArr;
classMenu.appendChild(crLi);
}


// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let elm of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.innerText = `${elm.title} ${elm.monthDuration}`;
    document.body.appendChild(divElement);
}



// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

 let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let line of coursesAndDurationArray2) {
 let someDiv = document.createElement('div');
 document.body.appendChild(someDiv);
 someDiv.classList.add('item');


 let someH = document.createElement('h1');
 someH.classList.add('heading');
 someH.innerText=`${line.title}`;
    someDiv.appendChild(someH);

    let someP = document.createElement('p');
    someP.classList.add('description');
    someP.innerText=` Скільки місяців триває курс? - ${line.monthDuration} `;
    someDiv.appendChild(someP);
}