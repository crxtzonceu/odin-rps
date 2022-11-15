let wins = 0
let lose = 0
let ties = 0

const getComputerChoice = () => {
  const rng = ['Rock', 'Paper', 'Scissor']
  return rng[Math.floor(Math.random() * 3)].toLowerCase()
}

const playRound = (player, bot) => {
  if(player == bot) {
    console.log(`It's a Tie! You both picked ${bot[0].toUpperCase() + bot.slice(1)}`)
    ties++
  } else if(player == "rock" && bot == "scissor"){
    console.log(`You Win! Rock beats Scissor`)
    wins++
  } else if(player == "scissor" && bot == "paper"){
    console.log("You Win! Scissor beats Paper")
    wins++
  } else if(player == "paper" && bot == "rock"){
    console.log("You Win! Paper beats Rock")
    wins++
  } else{
    console.log(`You Lose! ${bot[0].toUpperCase() + bot.slice(1)} beats ${player[0].toUpperCase() + bot.slice(1)}`)
    lose++
  }
}

const game = () => {
  for(let i = 0; i <  5; i++){
    const userMove = prompt("Enter your move: ").toLowerCase()
    playRound(userMove, getComputerChoice())
  }
  console.log(`in 5 Rounds`)
  console.log(`Wins: ${wins}`)
  console.log(`Loses: ${lose}`)
  console.log(`Ties: ${ties}`)
  console.log("Program Finished!")
}

game()