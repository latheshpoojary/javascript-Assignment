const tBody = document.getElementById('myTable');
let arr = [];

$.ajax({
    method:'GET',
    url:'./movies.json',
    success:function(res){
        arr=res;
        console.log(arr);
        setTable(arr)
    }
})
function setTable(arr){
    for(let index = 0;index<arr.length;index++){
        let total = arr[index].imdb.rating + arr[index].tomatoes.viewer.rating;
        let row = `<tr>
        <th>${arr[index].title}</th>
        <th>${arr[index].imdb.rating}</th>
        <th>${arr[index].tomatoes.viewer.rating}</th>
        <th>${total}</th>
        <th>${arr[index].plot}</th>
    </tr>`
    tBody.innerHTML+=row;
    }
    
}