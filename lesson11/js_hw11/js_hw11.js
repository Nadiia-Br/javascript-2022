// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let info = document.forms.first;
first.onsubmit = function (e) {
    e.preventDefault();

    let yourName = first.name.value;
    let yourAge = first.age.value;
    let user = {yourName, yourAge};
    localStorage.setItem('data', JSON.stringify(user));

};



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let arr = JSON.parse(localStorage.getItem('cars')) || [];
let infoCar = document.forms.car;
car.onsubmit = function (ev) {
    ev.preventDefault();

    let model = car.model.value;
    let type = car.type.value;
    let volume = car.volume.value;

    let allInfo = {model, type, volume};

    arr.push (allInfo);
    localStorage.setItem('allInfo', JSON.stringify((arr)));

}