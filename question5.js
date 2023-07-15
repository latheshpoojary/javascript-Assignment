

function sandwichCalculator(breads,cheese=Number.MAX_VALUE){
    return Math.min(cheese,parseInt(breads/2));
}
console.log(sandwichCalculator(11));
console.log(sandwichCalculator(12,0));