//worst
function myAdd(a, b) {
    return a + b;
}
//good enough
const myAdd2 = function myAdd2(a, b) {
        return a + b;
    }
    //fine
const myAdd3 = (a, b) => {
        return a + b
    }
    //OOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHHHHHHHH!
const myAdd4 = (a, b) => a + b;
//return yapmiyorsa asgai parantezler icinde ne yapiyorsa yazdir
const hello = () => {
        console.log("hello Mom!!")
    }
    //tek bir parametre varsa paranteze gerek yok
const hello2 = name => {
    // console.log("hello " + name);
    //Oh my godd 
    console.log(`Hello ${name}`);
}
const deneme = () => {
    console.log("deneme 1");
}

const deneme2 = () => console.log("deneme 2");
const deneme3 = () => {
    return console.log("deneme3");
}

const myText = "my-secret-id"
const user = {
    name: "ahmet",
    surname: "albat"
}
const users = [{
        name: "mazlum",
        surname: "orhan"
    },
    {
        name: "emre",
        surname: "Doctor"
    }
]

export { myAdd, myAdd2, myAdd3, myAdd4, hello, hello2, myText, user, users, deneme, deneme2, deneme3 };