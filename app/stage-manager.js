let currentStage = 0
let currentEnemy = null

function startStage(number) {
  currentStage = number
  activateCurrentStage()
}

function leaveStage() {
  currentStage = 0
  showMap()
}


function activateCurrentStage() {
  currentEnemy = pickRandomEnemyFromCurrentStage()
  showCurrentEnemy()
  showPlayerActions()
}


function showCurrentEnemy(){
  document.getElementById('enemy-type').innerText = currentEnemy.type
  document.getElementById('enemy-health').innerText = currentEnemy.health
}



