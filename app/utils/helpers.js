let currentStage = 0
let currentEnemy = null
const playerActionsElem = document.getElementById('player-actions')

playerActionsElem.addEventListener('click', () => {
  // @ts-ignore
  if (event.target.tagName == 'BUTTON') {
    // @ts-ignore
    hidePlayerActions(event.target?.innerText?.includes('Run'))
  }
})

function startStage(number) {
  currentStage = number
  activateCurrentStage()
}

function activateCurrentStage() {
  pickRandomEnemyFromCurrentStage()
  drawCurrentEnemy()
  drawPlayer()
  showPlayerActions()
}

function showPlayerActions() {
  document.getElementById('player-actions').classList.add('show')
}

function hidePlayerActions(hide) {
  document.getElementById('player-actions').classList.remove('show')
  if (!hide) {
    setTimeout(() => showPlayerActions(), 1000)
  }
}

document.querySelectorAll('.start-stage button').forEach(b => {
  // @ts-ignore
  b.addEventListener('click', () => {
    document.querySelector(`.enemy-container`).classList.remove('d-none')
    document.querySelector(`#stage-${currentStage}-screen .start-stage`)?.classList.add('d-none')
  })
})

document.querySelector('#run-button').addEventListener('click', () => {
  document.querySelector(`#stage-${currentStage}-screen .start-stage`)?.classList.remove('d-none')
  document.getElementById('player-actions').classList.remove('show')
  document.querySelector('.enemy-container').classList.add('d-none')
})

function pickRandomEnemyFromCurrentStage() {
  let stageEnemies = null

  if (currentStage == 1) {
    stageEnemies = stage1Enemies
  }

  if (currentStage == 2) {
    stageEnemies = stage2Enemies
  }

  if (currentStage == 3) {
    stageEnemies = stage3Enemies
  }

  let i = Math.floor(Math.random() * stageEnemies.length)
  const enemy = { ...stageEnemies[i] }
  messageUser(`Enemy ${enemy.type} approaches`)
  currentEnemy = enemy
  document.querySelector('.enemy-container img#enemy-picture')?.setAttribute('src', 'assets/' + currentEnemy.type + '.gif')
}


function messageUser(message = '') {
  const messageElem = document.getElementById("messagebar")

  messageElem.innerText = message

  messageElem.classList.add("show");

  setTimeout(() => messageElem.classList.remove('show'), 3000);

}