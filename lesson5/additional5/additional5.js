// - Дано натуральное число n. Выведите все числа от 1 до n.

// let num = (n)=>{
//     let mass = [];
//     for (let i = 1; i < n; i++) {
//         mass.push(i);
//     }
//     return mass;
// }
// console.log(num(5));
// console.log(num(15));
// console.log(num(50));


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let numbers = (a, b)=>{
//     let mass = [];
//     if (a < b){
//     for (let i = a; i < b; i++) {
//         mass.push(i);
//     }} else if (a > b){
//         for (let i =b, ri = a; i < a; i++, ri--) {
//             mass.push(ri);
//     }
// }
//     return mass;}
// console.log(numbers(15,10));
// console.log(numbers(2,10));
// console.log(numbers(60,25));



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = (i, ...mass) =>{
//
//     [mass[i], mass[i+1]]=[mass[i+1], mass[i]];
//
//    return mass;
// }
//
// console.log(foo(0, 9,8,0,4));
// console.log(foo(1, 9,8,0,4));
// console.log(foo(2, 9,8,0,4));



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let arr = (...mass) => {
//
//     let filtered = mass.filter(el => el !== 0);
//     return filtered.concat(Array(mass.length - filtered.length).fill(0));
// }
//
// console.log(arr(1,0,6,0,3));
// console.log(arr(0,1,2,3,4));
// console.log(arr(0,0,1,0));

