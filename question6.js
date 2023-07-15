var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
function makePizza(toppings){
    let beginning = "A tasty pizza with"; 
    return beginning+" "+toppings.join(" and " );   
}
console.log(makePizza(toppings));