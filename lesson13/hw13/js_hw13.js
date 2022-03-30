// console.log('My daily routine');
// setTimeout(() => {
//     let counter = 1;
//     console.log('I wake up', counter);
//     setTimeout(() => {
//         counter++;
//         console.log('I brush my teeth', counter);
//         setTimeout(() => {
//             counter++;
//             console.log('I have breakfast', counter);
//             setTimeout(() => {
//                 counter++;
//                 console.log('I get dressed', counter);
//                 setTimeout(() => {
//                     counter++;
//                     console.log('I work', counter);
//                     setTimeout(() => {
//                         counter++;
//                         console.log('I read a book', counter);
//                         setTimeout(() => {
//                             counter++;
//                             console.log('I go to bed', counter);
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 2000);



/////////////////////////////////////////////////////////////////////////////////////////

console.log('My daily routine');
new Promise((resolve, reject) => {
    let counter = 1;
    setTimeout(() => {
        console.log('I wake up', counter);
        counter++;
        resolve(counter);

    }, 1000);
})
    .then((counter) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I brush my teeth', counter);
                counter++;
                resolve(counter);
            }, 2000)
        })
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I have breakfast', counter);
                counter++;
                resolve(counter);

            }, 3000)
        });
    })
    .then(counter => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I get dressed', counter);
                counter++;
                resolve(counter)
            }, 2000);
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I work', counter);
                counter++;
                resolve(counter);

            }, 3000)
        });
    })
    .then(counter => {
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I read a book', counter);
                counter++;
                resolve(counter)
            }, 2000);
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('I go to bed', counter);
                counter++;
                resolve(counter)
            }, 2000);
        });
    })