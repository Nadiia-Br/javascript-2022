// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let b1 = document.getElementById('b1');
b1.onclick = function () {
    document.getElementById('text').style.display = 'none';
}


//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let b2 = document.getElementById('b2');
b2.onclick = function () {
    this.style.display = 'none';
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.z3;
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(this.age.value);
    if (this.age.value < 18) {
        alert('Вам менше 18 років');
    } else if (this.age.value >= 18) {
        alert('Вам більше 18 років');
    } else {
        alert('Введіть Ваш вік!!!!!!!');
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('change');
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


let list = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti1'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti2'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti3'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti4'},
    {title: 'lorem5', body: 'lorem ipsum dolo sit ameti5'}]

for (let comment of list) {


    let divCom = document.createElement('div');
    divCom.classList.add('com');

    let title = document.createElement('h2');
    title.innerText = comment.title;
    let inform = document.createElement('div');
    inform.innerText = comment.body;
    inform.classList.add('info');
    let btnCh = document.createElement('button');
btnCh.innerText='згорнути інформацію';

btnCh.onclick = function () {
    inform.classList.toggle('hide');
}
    divCom.append(title, inform, btnCh);
    document.body.append(divCom);

}

