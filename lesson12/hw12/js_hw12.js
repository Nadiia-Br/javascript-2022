// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

// let wrap = document.getElementById('wrap');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//         for (let valueElement of value) {
//             let postEl = document.createElement('div');
//             postEl.classList.add('post');
//
//             let divuserid = document.createElement('div');
//             let divid = document.createElement('div');
//             let divtitle = document.createElement('div');
//             let divbody = document.createElement('div');
//
//             divuserid.innerText = `user ID = ${valueElement.userId}` ;
//             divid.innerText = `ID -  ${valueElement.id}` ;
//             divtitle.innerText = valueElement.title;
//             divbody.innerText = valueElement.body;
//
//             divuserid.classList.add('userid');
//             divid.classList.add('id');
//             divtitle.classList.add('title');
//             divbody.classList.add('body');
//
// postEl.append(divid, divuserid, divtitle, divbody);
//             wrap.appendChild(postEl);
//         }
//     });








//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let com = document.getElementsByClassName('comments')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);

        for (let coment of value) {
            let divcom = document.createElement('div');
            divcom.classList.add('comment');

            let divpostid = document.createElement('div');
            let divid = document.createElement('div');
            let divname = document.createElement('div');
            let divbody = document.createElement('div');
            let divemail = document.createElement('div');

            divpostid.innerText = `post ID = ${coment.postId}` ;
            divid.innerText = `ID -  ${coment.id}` ;
            divname.innerText = coment.name;
            divbody.innerText = coment.body;
            divemail.innerText = coment.email;

            divpostid.classList.add('postid');
            divid.classList.add('id2');
            divname.classList.add('name2');
            divbody.classList.add('body2');
            divemail.classList.add('email');


            com.appendChild(divcom);
            divcom.append(divpostid, divid, divname, divbody, divemail);



        }
    });