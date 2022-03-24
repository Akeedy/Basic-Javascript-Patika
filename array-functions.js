const users = ["Mehmet", "ahmet", "emre", "esra", "zeynep"];
const objects = [{ name: "Orhan", age: 28 }, { name: "Orhan", age: 23 }, { name: "Orhan", age: 13 }, { name: "Atakan", age: 30 }, { name: "suleyman", age: 8 }];
/*
    Push
    Map
    find
    filter
    some
    every
    includes
*/

//Push
// users.push("Mazlum")
// users.push("Fatma")
// console.log(users)



//Map

//This is hard way
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
//Oh my god!!!!!! 
//This is the beauty 💓
// users.map((i) => console.log(i, "💖"));
// objects.map((i) => console.log(i.name, "💖"));


// //find 
// const result = objects.find((item) => item.name == "Orhan" && item.age > 18)
// console.log(result, " Is fucking Awesome 😃")

//filter
// const filtered = objects.filter((item) => item.name == "Orhan" && item.age > 20);
// console.log(filtered);


//some
//for some items condition?True:False

// const result = objects.some((item) => item.name == "Atakan");
// console.log(result);

//Every
//For every items condition?:True:False

// const result = objects.every((item) => item.age == 19)
// console.log(result);


//Include
//If array contains item ?True:False

console.log(users.includes("zeynep"));
console.log(users.includes("orhan"));