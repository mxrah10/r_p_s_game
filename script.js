function getComputerChoice()
{
    let i = parseInt(Math.random()*3);
    if (i==0) return "rock";
    else if (i==1) return "paper";
    else return "scissors";
}

function gameRound(playerSelection, computerSelection)
{
    if (playerSelection=="rock" && computerSelection=="paper") {
        console.log("You lose! Paper beats Rock!")
        return "c";
    }
    else if (playerSelection=="paper" && computerSelection=="paper") {
        console.log("Tie!")
        return "t";
    }
    else if (playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You win! Scissors beats Paper!")
        return "p";
    }

    else if (playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You win! Rock beats Scissors!")
        return "p";
    }
    else if (playerSelection=="paper" && computerSelection=="scissors") {
        console.log("You lose! Scissors beats Paper!")
        return "c";
    }
    else if (playerSelection=="scissors" && computerSelection=="scissors") {
        console.log("Tie!")
        return "t";
    }

    else if (playerSelection=="rock" && computerSelection=="rock") {
        console.log("Tie!")
        return "t";
    }
    else if (playerSelection=="paper" && computerSelection=="rock") {
        console.log("You Win! Paper beats Rock!")
        return "p";
    }
    else if (playerSelection=="scissors" && computerSelection=="rock") {
        console.log("You Lose! Rock beats Scissors!");
        return "c";
    }

}

function game(){
    let p_count = 0;
    let c_count = 0;
    for (let i = 0; i < 5; i++) {
        let p_choice = prompt("Please enter rock, paper or scissors: ").toLowerCase();
        let c_choice = getComputerChoice();
        let win = gameRound(p_choice, c_choice);
        if (win==="p")
        {
            p_count++;
        }
        else if (win==="c")
        {
            c_count++;
        }
    }
    if (p_count > c_count)
    {
        return "Player Wins!";
    }
    else if (p_count < c_count)
    {
        return "Computer wins!";
    }
    else 
    {
        return "Oops, you're both equal!";
    }
}

console.log(game());