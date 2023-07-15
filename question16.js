const arr = [[[[[[[[[[[]]]]]]]]]]];


let count = 0;
function findDepth(arr){
    if(!arr){
        
        return ;
    }
    else{
        count++;
        findDepth(arr[0]);
    }
}
findDepth(arr)
console.log(count);