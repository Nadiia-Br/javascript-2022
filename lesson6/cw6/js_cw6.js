//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// function valid(name){
//    let validName = name.replaceAll('..', ' ').replaceAll('---',' ').replace('__',' ');
//     return validName;
// }
// console.log(valid(n1));
// console.log(valid(n2));
// console.log(valid(n3));



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let randomizer = (size) => {
//     let mass = [];
//     for (let i = 0; i < size; i++) {
//         mass.push(Math.round(Math.random()*100));
//
//     }
//     return mass;
// }
// console.log(randomizer(15));



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let randomizer = (size) => {
//     let mass = [];
//     for (let i = 0; i < size; i++) {
//         mass.push(Math.round(Math.random()*100));
//
//     }
//     return mass;
// }
// let mass2 = (randomizer(15));
// mass2.sort((x, y) => x-y );
// console.log(mass2);



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа


// let randomizer = (size) => {
//     let mass = [];
//     for (let i = 0; i < size; i++) {
//         mass.push(Math.round(Math.random()*100));
//
//     }
//     return mass.filter(number => number%2 === 0);
// }
// let mass2 = (randomizer(15));
// console.log(mass2);



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let randomizer = (size) => {
//     let mass = [];
//     for (let i = 0; i < size; i++) {
//         mass.push(Math.round(Math.random()*100));
//
//     }
//     return mass;
// }
// let mass2 = (randomizer(15));
// console.log(mass2.map(value => value + ''));



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (arr, direction) => {
//     newSort=[];
//     if (direction === 'ascending' ){
//         newSort = arr.sort((a, b) => a - b);
//         return  newSort ;
//     }else if  (direction === 'descending' ){
//         newSort = arr.sort((a, b) => b - a);
//         return  newSort ;
//     }
// }
// console.log(sortNums([5, 75, 125,26, 4, 278],'ascending' ));
// console.log(sortNums([5, 75, 125,26, 4, 278],'descending' ));
// console.log(sortNums([5, 75, 125,26, 4, 278],'descend' ));



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortCours= coursesAndDurationArray.sort((a,b) => b.monthDuration- a.monthDuration);
// console.log(sortCours);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let filterCourses = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filterCourses);