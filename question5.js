//Requirement........

// Write a function called sandwich calculator. This should accept one value: bread
// The function should return the total number of possible sandwiches based on the amount of bread available. I need 2 breads to make one sandwich, so if there are 10 breads, it should return 5. Test your function with console.log.
// Extend your function so it accepts two values, bread and cheese.
// It takes two breads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.


function sandwichCalculator(breads,cheese=Number.MAX_VALUE){
    return Math.min(cheese,parseInt(breads/2));
}
console.log(sandwichCalculator(11));
console.log(sandwichCalculator(12,0));