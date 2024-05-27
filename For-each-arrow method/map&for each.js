// const fruits=['banana','pinapple','apple','grapes']
// fruits.forEach(fruit => {
//     console.log(fruit.toUpperCase());   
//     return fruit.toUpperCase()
// })

// const months=['jan','feb','march','april','may']
// console.log(months.map((month)=>{
// //     console.log(month)
// // //     return month.toUpperCase()
// // // }))

// // // in for each do not return any value or rssult
//  const flowers=['rose','lotus','sunflower']
//  const capitl =flowers.forEach((leaf)=>{
//     console.log(leaf)
   
//  })

// in map we can return any value or rssult
// const flowers1=['rose','lotus','sunflower']
// console.log(
//    flowers1.map((leaf)=>{
//    console.log(leaf)
//    return leaf.toUpperCase()
// })
// )


const flowers = ["rose", "tulip", "daisy"]; // Example array of flower names

const flowersBunch = flowers.map((leaf, index, array) => {
    console.log(index + 1, leaf);
    console.log(array);
    return leaf.toUpperCase();
});

console.log(flowersBunch);