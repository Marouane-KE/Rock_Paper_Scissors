const getComputerChoice = () =>{

    let arr = ['ROCK','PAPER','SCISSORS']
    let rand = Math.floor(Math.random()*3)
    return arr[rand]
}



// console.log('Computer Choice:   '+computerSelection)
// console.log('player Choice:   '+playerSelection)

// let playerSelection='ROCK'

const playRound =(playerSelection, computerSelection) =>{

    // if (playerSelection!=='ROCK' || playerSelection!=='ROCK' || playerSelection!=='ROCK') {

    while (!['ROCK','PAPER','SCISSORS'].includes(playerSelection)) {
        
       console.log("pleas Choose one of 'ROCK','PAPER' or 'SCISSORS'  ")
    }   
        
    if (playerSelection==computerSelection) {
        return 'Draw'
    }
    else if(playerSelection== 'ROCK' && computerSelection=='PAPER'){ //ROCK
        return 'You Lose! PAPER beats ROCK'     //lose
    }else if(playerSelection== 'ROCK' && computerSelection=='SCISSORS'){
        return 'You win! ROCK beats SCISSORS'   //win
    }else if(playerSelection== 'PAPER' && computerSelection=='ROCK'){//PAPER
        return 'You win! PAPER beats ROCK'     //win
    }else if(playerSelection== 'PAPER' && computerSelection=='SCISSORS'){
        return 'You Lose! SCISSORS beats PAPER' //lose
    }else if(playerSelection== 'SCISSORS' && computerSelection=='ROCK'){ //SCISSORS
        return 'You Lose! ROCK beats SCISSORS' //lose
    }else if(playerSelection== 'SCISSORS' && computerSelection=='PAPER'){
        return 'You win! SCISSORS beats PAPER'  //win
    }


}

// console.log(playRound(playerSelection,computerSelection))


const game=()=>{
    let playerCounter=0;
    let pcCounter=0;
    for (let i = 0; i < 5; i++) {
        let alr = prompt(" Choose one of 'ROCK','PAPER' or 'SCISSORS'")
        let computerSelection=getComputerChoice();
        let playerSelection=alr.toUpperCase();
        
        if (playRound(playerSelection,computerSelection).includes('win')){
        playerCounter++
        }else{
            pcCounter++
        }
      alert(`your score: ${playerCounter}  pc score: ${pcCounter}`)
    }
    if (playerCounter>pcCounter) {
        alert(`your win!!! with score : ${playerCounter} vs ${pcCounter}`)
    }else{alert(`your lose :( with score : ${playerCounter} vs ${pcCounter}`)}
}
console.log(game())