console.log('My daily routine');
setTimeout(() => {
    let counter = 1;
    console.log('I wake up', counter);
    setTimeout(() => {
        counter++;
        console.log('I brush my teeth', counter);
        setTimeout(() => {
            counter++;
            console.log('I have breakfast', counter);
            setTimeout(() => {
                counter++;
                console.log('I get dressed', counter);
                setTimeout(() => {
                    counter++;
                    console.log('I  work', counter);
                    setTimeout(() => {
                        counter++;
                        console.log('I read a book', counter);
                        setTimeout(() => {
                            counter++;
                            console.log('I go to bed', counter);
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 2000);
