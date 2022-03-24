// setTimeout(() => {
//     console.log("I'm working");
// }, 3000);

// setInterval(() => {
//     console.log("I'm working every second")
// }, 1000);


//pass functions as paramater
// const sayHi = (func) => {
//     func();
// }

// sayHi(() => {
//     console.log("What happening right now?");
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users downloaded", users);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(data => data.json())
//             .then(posts => console.log("Post downloaded", posts))
//     })

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log('Users', users)
//     const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
//     console.log('Posts', posts)
// }
// getData();


//Anonymous function
//With Fetch
// (async() => {
//     console.log("Hey , I'm an anonymous function")
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     console.log('Users', users)
//     const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
//     console.log('Posts', posts)
// })()

//Axios
// (async() => {

//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts");
//     console.log('Users', users)
//     console.log('Posts', posts)

// })()

//Promises

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        console.log("Get Users");
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
        // reject("Hicbir sey olmadiysa bile bir seyler olmuster");
    });
}
const getPosts = () => {
    return new Promise(async(resolve, reject) => {
        console.log("Get Posts");
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
        resolve(data);
    });
}


//First Way
// (async() => {

//     await getUsers()
//         .then((data) => console.log(data))
//         .catch((e) => console.log("Error", e));

//     await getPosts()
//         .then((data) => console.log(data))
//         .catch((e) => console.log("Error", e));

// })()

//Second Way
// (async() => {
//     try {
//         const users = await getUsers();
//         const posts = await getPosts();
//         console.log(users);
//         console.log(posts);
//     } catch (error) {
//         console.log(error);
//     }
// })()

//Third Way
Promise.all([getUsers(), getPosts()])
    .then(console.log)
    .catch(console.log)