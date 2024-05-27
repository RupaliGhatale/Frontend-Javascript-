// console.log("program started");
// //debugger
// let num=0;
// while(num<=10)
//     {
//         console.log("hi");
//        num=num+1
//     }
//     console.log("program ended")


const friends=['rupali','swati','mahesh','veeru']
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
let i=0;
while(i<friends.length){
    console.log(`${i+1}.${friends[i]}`);
    friends[i]=friends[i] + ' procoder'
    i++
}
