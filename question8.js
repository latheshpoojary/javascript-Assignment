var toppings = ['cheese', 'ham', 'bits', 'tomatoes'];
var newArr=toppings.map((item)=>{
     return item.charAt(0).toUpperCase()+item.substring(1);
})
console.log(newArr);