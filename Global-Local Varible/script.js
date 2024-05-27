debugger
const userName='Rupali'
const userAge=29
function add(){
    const x=5;
    const y=6;
    console.log(x+y)
    console.log(userName)
    function child()
    {
       const childName='Rudra'
       console.log(childName)

       function grandChild(){
        const grandChildName='Viraj'
        console.log(grandChildName)
       }
       grandChild()

    }
    child()
}
add()
//child()
