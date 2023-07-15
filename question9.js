// const str = "The quick brown fox";
// const newArr = str.split(' ');
// let newStr='';
// newArr.forEach(element => {
//     const pigLetter = element.charAt(0)+"ay";
//     newStr+=(element.slice(1).concat(pigLetter))+" ";
// });
// console.log(newStr);


//other approch......
const str = "The quick brown fox";
const newArr = str.split(' ');
const modifiedArr = newArr.map((element)=>{
    const pigLetter = element.charAt(0)+"ay";
    return element.slice(1).concat(pigLetter);
})
const newStr = modifiedArr.join(' ');
console.log(newStr);
