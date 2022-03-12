// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('but').onclick = function () {
    let el1 = document.forms.n1.e1.value;
    let el2 = document.forms.n1.e2.value;
    let el3 = document.forms.n2.e3.value;
    let el4 = document.forms.n2.e4.value;
    console.log(el1, el2, el3, el4);
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let gen = document.forms.inp3;
gen.onsubmit = function (e) {
    e.preventDefault();
    let riadok = +gen.r.value;
    let kilkist = +gen.k.value;
    let vmist = gen.v.value;
    console.log(riadok, kilkist, vmist);

    let table = document.createElement('table');
    document.body.appendChild(table);


    for (let i = 0; i < riadok; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < kilkist; j++) {
            let klk = document.createElement('td');
            tr.appendChild(klk);
            klk.innerText = vmist;
        }

        table.appendChild(tr);
    }
}





// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let arr = ['дурбелик', 'йолоп', 'телепень', 'падлюка', 'бовдур']
// let bn = document.getElementById('bn');
// bn.onclick = function () {
//
//     let w = document.getElementById('word').value;
//
//     for (let elarr of arr) {
//         if (elarr === w){
//             alert('Не треба так, це слово погане('
//             )
//         }
//     }
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


let arr = ['дурбелик', 'йолоп', 'телепень', 'падлюка', 'бовдур']
let bn = document.getElementById('bn');
bn.onclick = function () {

    let w = document.getElementById('word').value;

    for (let elarr of arr) {
        if (w.includes(elarr)){
            alert('Не треба так, це слово погане(')
        } else {
            alert('Все супер!') ;
        }
    }
}