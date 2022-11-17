const displayMove = document.getElementById('display-move')
const displayRoundResult = document.getElementById('round-message')
const displayScore = document.getElementById("score")
let playerScore = 0
let botScore = 0
let totalGames = 0
let wins = 0
let loss = 0
let ties = 0

// event listeners
document.addEventListener('click', function(e){
  // filter the clicks
  if (e.target.id == 'reset') {
    resetGame()
  } else if(playerScore == 5 || botScore == 5) {
    return
  }
  else if(e.target.id == 'Rock') {
    playRound('Rock')
  }
  else if(e.target.id == 'Paper') {
    playRound('Paper')
  }
  else if(e.target.id == 'Scissor') {
    playRound('Scissor')
  }
})

const playRound = playerMove => {
  const botMove = getBotMove()
  let result = ''
  // check the win, lose and tie state
  if(playerMove == botMove) {
    result = "Tie"
    ties++
    totalGames++
  } else if(playerMove == 'Rock' && botMove == 'Scissor' ||
          playerMove == 'Paper' && botMove == 'Rock' ||
          playerMove == 'Scissor' && botMove == 'Paper') {
    result = 'Win'
    wins++
    playerScore++
    totalGames++
  } else {
    result = 'Lose'
    loss++
    botScore++
    totalGames++
  }
  // pass the moves and call to render the dom
  renderHtml(playerMove, botMove, result)
}

const renderHtml = (player, bot, result) => {
  // Render the Score and the Moves
  displayScore.textContent = `${playerScore} VS ${botScore}`
  displayMove.innerHTML = `
  <p>Player: <span class="space">${player}</span> 
  VS 
  <span class="space">${bot}</span>:Bot</p>
  `
  // Round Message Result
  if(playerScore == 5 || botScore == 5) {
    // Check who is the winner
    if(playerScore > botScore) {
      displayRoundResult.textContent = "You Won the Game!"
    } else {
      displayRoundResult.textContent = "You Lost the Game!"
    }
  } else {
    if(result == 'Tie'){
      displayRoundResult.textContent = `It's a Tie!`
    } else {
      displayRoundResult.textContent = `Round Result: ${result}!`
    }
  }
  // Game Stats
  document.getElementById('total-games').textContent = totalGames
  document.getElementById('wins').textContent = wins
  document.getElementById('loss').textContent = loss
  document.getElementById('ties').textContent = ties
}

const getBotMove = () => {
  // @return bot move
  const rng = ['Rock', 'Paper', 'Scissor']
  return rng[Math.floor(Math.random() * 3)]
}

const resetGame = () => {
  // reset the game, variables, and the dom
  playerScore = 0
  botScore = 0
  totalGames = 0
  wins = 0
  loss = 0
  ties = 0
  displayScore.textContent = `Score : ${playerScore} VS ${botScore}`
  displayMove.innerHTML = `
  <p>Player: <span class="space">Waiting...</span> 
  VS 
  <span class="space">Waiting...</span>:Bot</p>
  `
  displayRoundResult.textContent = `Waiting for the game to start!`
  document.getElementById('total-games').textContent = 0
  document.getElementById('wins').textContent = 0
  document.getElementById('loss').textContent = 0
  document.getElementById('ties').textContent = 0
}