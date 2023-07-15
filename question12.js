// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in number until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
let count =0;
function multiplicative(num){
    
    if(num<10){
        return num;
    }
    else{
        count++;
       return multiplicative(findMulti(num));



    }
}
function findMulti(num){
    let rem;
    let mul=1;
    while(num>0){
        rem = num%10;
       
        mul*=rem;
        num=Math.floor(num/10) ;
    }
    return mul;
}
multiplicative(4);
console.log(count);