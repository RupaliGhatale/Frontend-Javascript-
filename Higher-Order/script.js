debugger
function a(b)
{
    console.log(b);
    b()
}

// a("hiiiiii")
// a({userName:'anurag',userage:25})
// a([1,7,8,9])
// console.dir("hiiiiiiiiiiiiiiiiiiiii");
// console.dir(85934)
// console.dir(a)
function sayHi(){
    console.log("hiiiii")
}
const x=sayHi()
console.log(x)
a(sayHi)