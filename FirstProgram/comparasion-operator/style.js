// //const userName="Rupali";
// // userAge=22;
// const userName=prompt("Enter the name");
// const userAge=+prompt("Enter te age");

// console.log(`Name : ${userName}`);
// console.log(`Age:${userAge}`);
// // if(userAge>=18) {
// //     console.log("its valid");

// //   console.log("its not validated");
// // }
// if(userAge>=45) {console.log("user retired");
//  console.log("user not retired");

// }
// // const userName='29';
// // const userAge=29;

// // console.log(+userName===userAge)


const userName = prompt("Enter the name");
const userAge = +prompt("Enter the age");

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

const retirementStatus = userAge >= 45 ? "User retired" : "User not retired";
console.log(retirementStatus);
const user={firstName:'Rupali',lastName:'Ghatale',age:29,education:'BE'}