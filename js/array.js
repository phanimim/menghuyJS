
// // Array destructuring

// const phones = ["Nokia", "iPhone", "Samsung", "Huwei"];
// const [phone1, , , pixel]= phones;

// //console.log(phone1,pixel);

// const job = "Teacher";
// const obj = {name: "Phanim", myjob: job};

// //console.log(obj);

// const key = "job";
// const obj1 = {name: "Phanim", [key]: "Teacher",
// };

// //console.log(obj1);


// // Object.freeze 
// const obj2 = {
//     name: "Phanim",
// print(){
//     console.log("print");
// },
// }; 
// Object.freeze(obj2);
// obj2.name = "Sopheak";
// //console.log(obj2.name);

//Object distructuring

// const user = {
//     name: "Sopheak", 
//     age: 25, 
//     job: "Accountant",
//     contact: {
//         phone: "0123445",
//         email: "phanim@fss.com",
//     },
// };
// const {name: userName, contact:{phone: userPhone, email},} = user;
// console.log(userName, userPhone, email);

// const uerOne = {name: "Phanim", address: "PP"};
// const userTwo = {name: "Sopheak", address: "KD"};

// function print({name, address: userAddr}){
//     //const {name, address} = obj;
//     console.log(`${name}, addr: ${userAddr}`);
// };

// print(userTwo);

// for of loop = access string or array 

// const phones = ["Nokia", "iPhone", "Samsung", "Huwei"];
// for (const phone of phones)
// {
//     //if (phone === "Samsung")break; // stop at Samsung
//     if (phone === "Samsung")continue; // skip Samsung
//     console.log(phone);
// };



// spread, operator, array
//  const friends = ["Sopehak", "Kanha", "Tola", ];
//  const oldFriends = ["Khem", "Vitou",];
//  const bestFriends = ["Khim", "Sam"]

//  //const allFriends= friends.concat(oldFriends); // concat method
//  const allFriends = [...friends,...oldFriends,...bestFriends]; // spread operators = copy not ref
//  console.log(allFriends);

// object spread operators

// array vs set
// const phones = ["Nokia", "iPhone", "Samsung", "Huwei", "iPhone"];
// const myPhone = phones.reduce((acc, item)=>{
//     if (!acc.includes(item)){
//         acc.push(item);
//     }
//     return acc;
// },[]);

// const setList = new Set ([1,2,3,4,2]); // cannot access index
// //setList.add(99); // add
//setList.delete(1); // remove
//const checkList = setList.has(99); // check (Boolean= true/false)
//setList.clear();

// const setListArray = [...setList]; // convert to array, using spreat operators
// //console.log(setListArray[1]);

// Rest operator 

// const phones = ["Nokia", "iPhone", "Samsung", "Huwei", "iPhone"];
// const [phone1, phone2] = phones;
// console.log(phone1, phone2);

// const friends = ["Sopehak", "Kanha", "Tola", ];
// const oldFriends = ["Khem", "Vitou",];
// //const bestFriends = "Khim";

// //const allFriends = [...oldFriends, ...friends, ...bestFriends]; // spread
// //console.log(allFriends);

// const allFriends = [...oldFriends, ...friends]; // rest
// const [f1, f2, ...rest] = [...oldFriends, ...friends]; // rest (comine)
// console.log(f1, rest);

// const totalNumber = (n1, n2,...numbers)=>{
//     let result = n1+n2;
//     result += numbers.reduce((total,num)=>total+num, 0);
//     return result;
// };

// const numbers = [20, 60, 15];
// const result = totalNumber(5,10,...numbers);
// console.log(result);

// for in loop
// const users = {
//     email: "phanimt@soi.com",
//     role: "IT",
//     address: "AUS",
// };

//for (const keys in users) console.log(keys);
//for (const keys in users) console.log(`${keys} : ${users[keys]}`);

// object method
// const objKeys = Object.keys(users);// keys
// const objValues = Object.values(users);
// const objEntries = Object.entries(users);
// console.log(objKeys);
// console.log(objValues);
// console.log(objEntries);

// Object.entries(users).forEach(([key, value])=>{
//     console.log(`${key} : ${value}`);
// });

// object vs map

// const mapObject = new Map([
//     ["name","Phaim"],
//     ["age", 30],
// ]);

// mapObject.forEach((value, key)=> {
//     console.log(`${key} : ${value}`)
// });
// // for of loop
// for(const [key, value] of mapObject){
//     console.log(`${key} : ${value}`)
// }
// for in loop


// mapObject.set("name","Phaim");
// mapObject.set("age", 30); 
// mapObject.delete("age");

//console.log(mapObject.size);

//const result = mapObject.get("name");
//const result = mapObject.has("name");
//const result = mapObject.clear("name");

//console.log(result);

// Array method

// const user = [
//     {name: "Sopehak", age: 34},
//     {name: "Thida", age: 25},
//     {name: "Nichai", age: 5},
// ];

//const findUser = user.find((u)=> u.age === 25);
//console.log(findUser);

//const findUser = user.findIndex((u)=> u.age === 25);
//const findUser = user.every((u)=> u.age === 25); // true if all true, otherwise false
// const findUser = user.some((u)=> u.age === 25); // true if any true, otherwise false

// console.log(findUser);

// finding any
// const myArray = ["a", "b", "c", "d"];
// const finding = myArray.includes("a");
// console.log(finding);

// replace all
// const filling = myArray.fill("item");
// console.log(filling);

// replace some (Start/Ending)
// const fillingStartEnd = myArray.fill("item",0,-1);
// console.log(fillingStartEnd);

// const text = "phanim"
// // const arr = Array.from(text, (item) =>{
// //     return `<p>${item}<p>`
// // }).join("");

// // console.log(arr);
// // const mapFunc = (item)=>{
// //     return `<p>${item}<p>`;
// // };

// const arr = Array.from(text, mapFunc);
// function mapFunc(item){
//     return `<p>${item}<p>`;
// };
// console.log(arr);

// const obj = {
//     0: "Phanim",
//     1: 25,
//     length: 2
// };
// const myArray = Array.from(obj);
// console.log(myArray);


//MODULE

