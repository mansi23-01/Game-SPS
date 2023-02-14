/*storing things in variables so that we can use it later*/

let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p")
const stone_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

/*Now adding some eventListners*/

function getComputerChoice(){
    const choices=['r', 'p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function userWin(userChoice,computerChoice){
 userScore++;
 userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_div.innerHTML= `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You Win :)`
}

function computerWin(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
 computerScore_span.innerHTML=computerScore;
 result_div.innerHTML= `${convertToWord(userChoice)}(user) loses ${convertToWord(computerChoice)}(comp). Comp Win :)`
}

function draw(userChoice,computerChoice){
    result_div.innerHTML= `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(comp). It's a draw :)`
}


function game(userChoice){
     const computerChoice=getComputerChoice();
      switch(userChoice + computerChoice){
        case "pr":
        case "sp":
        case "rs":
            userWin(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
           computerWin(userChoice,computerChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice,computerChoice);
            break;
      }
    }
    

function main(){
    stone_div.addEventListener('click',function(){
     game("r");
    })
    paper_div.addEventListener('click',function(){
      game("p");
    })
    scissors_div.addEventListener('click',function(){
       game("s");
    }) 
}

main();

