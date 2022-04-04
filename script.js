let player = document.querySelector('.player');

let start = document.querySelector('.startGame');

let guess = document.querySelector('.guess');

let player1 = document.querySelector('.player1');

let player2 = document.querySelector('.player2');

let message = document.querySelector('.message-box');

let warning = document.querySelector('.warning');

let winner = document.querySelector('.winner');
let result = document.querySelector('.result');


let imagepro = document.querySelector('.imagepro');
let lostbg = document.querySelector('.game-box')
let chanceAmount = document.querySelector('.chance');
let gamestaus = document.querySelector('.gamestaus');


let chance = 3; 

start.addEventListener('click', function(){
    if(player1.value <=0 || player1.value >9 ){
     warning.innerHTML = "Please enter number between 1-9";
    

    }else{
        
        imagepro.src = "/images/p2.png"
        player.innerHTML = "Player 2";
        start.style.display = "none";
        player1.style.display = "none";
        player2.style.display = "block";
        guess.style.display = "block";
        warning.style.display="none"
        chanceAmount.innerHTML = `You Have ${chance} chances`;
    }
})


guess.addEventListener('click', function(){
    chance--;
    chanceAmount.innerHTML = `You Have ${chance} chances`;

  
   if(player1.value === player2.value){
    result.innerHTML = "Congratulations ! You Won the game";
    lostbg.style.backgroundColor = "#00ab6718"
    guess.style.display ="none"
   }else if(player1.value !== player2.value){
   
   }

   if(chance ==0){
    gamestaus.innerHTML = "Game Over"
    guess.style.display ="none"
    result.innerHTML = "You Lost !";
    lostbg.style.backgroundColor = "rgba(255, 0, 0, 0.103)"
    }else{

    }
})