// const flowers1=['rose','lotus','sunflower']
// const capitalFlowers=flowers1.map((leaf,index)=>{
//    console.log(index +1,leaf)
//    return leaf.toUpperCase()
// })

// const flowersBunch1=flower.map((leaf,index,Array) => {
//    console.log(index + 1, leaf)
//    console.log(Array);
//    return leaf.toUpperCase()

// })

//******************************************************************************************************* */

//debugger
// const flowers = ["rose", "tulip", "daisy",'Sunflower']; // Example array of flower names

// const flowersBunch = flowers.filter((leaf) => {
//     console.log(leaf.length<=3);
//     //console.log(array);
//     return false
// })

// const months = ['January', 'February', 'March', 'April', 'May', 'December']

// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month)
//     return month.toUpperCase()
//   })

//********************************************************************************************************* */

// //const capitalMonths = months.map((month, index, array) => {
//     // console.log(index + 1, month)
//     // console.log(array);
//     return month.toUpperCase()
//   })

// //*********************************************************************************************************** */

// // const filteredMonths = months.filter((month, index, array) => {
// //     console.log(month.toLocaleLowerCase().includes('m'))
// //     // console.log(array);
// //     return month.toLocaleLowerCase().includes('m')
// //   })
// //************************************************************************************************************** */

// const filteredMonths = months.filter((month, index, array) => {
//     // console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return false
//   })

//**************************************************************************************************************** */

const months = ['January', 'February', 'March', 'April', 'May', 'December']
const filterMonths = months.filter((month, index, array) => {
   //  console.log(month.length<=5)
     //console.log(array);
    //return month.toLowerCase().includes('m');
   
  })
  console.log(filterMonths)