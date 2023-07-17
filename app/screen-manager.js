let startScreen = document.getElementById('start-screen')
let mapScreen = document.getElementById('map-screen')
let stage1Screen = document.getElementById('stage-1-screen')
// TOOD create a variable for the other screens

function hideActiveScreen() {
  document.querySelector('.screen.show')?.classList.remove('show')
}

function showStartScreen() {
  hideActiveScreen()
  startScreen.classList.add('show')
  setTimeout(() => {
    startScreen.querySelector('.action-box').classList.add('show')
  }, 1)
}

function showMap() {
  hideActiveScreen()
  mapScreen.classList.add('show')
}

function showStage1() {
  // STUB
}

function showStage2() {
  // STUB
}

function showStage3() {
  // STUB
}

function showVictory() {
  // STUB
}

function showGameOver() {
  // STUB
}

showStartScreen()