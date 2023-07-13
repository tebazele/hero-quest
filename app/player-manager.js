const player = {
  currentHealth: 10,
  maxHealth: 10,
  level: 1,
  attackPower: 1
}


function showPlayerActions() {
  document.getElementById('player-actions').classList.add('show')
}

function hidePlayerActions() {
  document.getElementById('player-actions').classList.remove('show')
  setTimeout(showPlayerActions, 10)
}

function healPlayer() {
  player.currentHealth += 10
}

function attackEnemy() {
  currentEnemy.health -= player.attackPower
}



