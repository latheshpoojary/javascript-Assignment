const greeting = "hello";
const name = "world";
// alert(greeting+" " +name)
const message = greeting+" "+name;
// const replacement ={
//     "l":"1",
//     "o":"0"
// }

// const regExpression = new RegExp(Object.keys(replacement).join("|"),"ig");

const replacedString = message.replace(/l|o/g,function(match){
    
    if(match==="l"){
        
        return 1;
    }
    else{
        
        return 0;
    }
     // return replacement[match];
}) ;

console.log(replacedString);
const reversedString = replacedString.split('').reverse().join().replaceAll(',',"");
console.log(reversedString);

console.log("--\n");