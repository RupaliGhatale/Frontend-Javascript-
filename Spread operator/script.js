  const nums1=[1,2,3,4]
   const nums2=[5,6,7,8,9,10]
//  const name='Rupali'
  const joinedArray=[...nums1, ...nums2]
//    console.log(joinedArray);
//    console.log(name);

//    // we can you spread parameter on array as well as object

//    const user={
//     userName:'Rudra',
//     Age:'5',
//     Address:'Nandgaon',
//    }
//    const updatedUser={...user}



   function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
        {
            sum+=arguments[i]
        }
   return sum
    }

// using function call and add one arraay into another array value spred time.
// one obect to another object value spread time  we can use spred operator .
// its pronounced is Spred operator