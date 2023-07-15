// const newArr = ["Hello", "World", "in", "a", "frame"];
// const len = newArr.reduce((max,item)=>{
//     return max<item.length?item.length:max;
// },0)
// console.log("*".repeat(len+5));
// newArr.forEach((item)=>{
//     console.log("*",item," ".repeat(len-item.length),"*");
// })
// console.log("*".repeat(len+5));


//improved code..........
const newArr = ["Hello", "World", "in", "a", "frame"];
const len = Math.max(...newArr.map((item)=>item.length));
function createFrame(newArr,len){
    const frameLine = "*".repeat(len+5);
    console.log(frameLine);
    newArr.forEach(element => {
        console.log("*",element," ".repeat(len-element.length),"*");
    });
    console.log(frameLine);
}
createFrame(newArr,len)