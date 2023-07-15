let boxes = Array.from(document.getElementsByClassName('box'));
let restartBtn = document.getElementById('restart');
let playerText = document.getElementById('playerTerm');
let board = document.getElementById('playerBoard');
console.log(boxes);
let playerTerm = 'X';
let winnerName ='';
const boardContent = Array(9).fill(null);
function startGame(){
    boxes.forEach((item)=>item.addEventListener('click',setText));
}
function setText(e){
    
    let id = e.target.id;
    if(!boardContent[id]){
            boardContent[id]=playerTerm;
            e.target.innerText = playerTerm;
            if(winner()!==false){
                console.log("true");
                playerText.innerHTML=`${winner()} won the Match🏆🏆`; 
                boardContent.fill(" ");
                return;
            }
            
            
     
           playerTerm = playerTerm == 'X'?'O':'X';
    
        }
   
   
}
restartBtn.addEventListener('click',()=>{
    boardContent.fill(null)
    boxes.forEach((item)=>{
        item.innerHTML='';
    })
    playerText.innerHTML = "Tic Tac Toe"
    playerTerm = 'X';
})
const winnerArr =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
function winner(){
    for(const element of winnerArr){
        let [a,b,c] = element;
        if(boardContent[a] && (boardContent[a] == boardContent[b] && boardContent[a] == boardContent[c])){
           
            return boardContent[a];
       }
    }
    return false;
    
    
   
}

startGame();
winner();
