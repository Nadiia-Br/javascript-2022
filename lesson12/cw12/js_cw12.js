// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


let divposts = document.getElementsByClassName('posts')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        for (let postik of value) {
            let divpostik = document.createElement('div');
            divpostik.innerText = `POST ID -  ${postik.id}.  ${postik.body}`;
divpostik.classList.add('post');
            let btn = document.createElement('button');
            btn.innerText = 'c o m m e n t s';
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postik.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let divcom = document.createElement('div');


                        for (let divcomElement of value) {
                         let comment = document.createElement('div');
                         comment.innerHTML = `<h3>Our comment: ${divcomElement.body}</h3>`;
                            comment.classList.add('cmmnt');

                            divcom.append(comment);

                        }


                        divpostik.append(divcom);
                    });
            }

            divpostik.append(btn);
            divposts.append(divpostik);

        }

    });