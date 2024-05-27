const nums1=[1,2,3,4]
debugger
function add(a,b,c, ...nums){   // Rest parameter must be last formal parameter
    console.log(a,b);
    console.log('nums:', nums);
}
const result=add(8,9,4,6,7,8,9)

// we can use define funtion time
// we can pronounced Rest Parameter always