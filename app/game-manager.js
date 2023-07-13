const player = {
  currentHealth: 10,
  maxHealth: 10,
  level: 1,
  attackPower: 1
}

function healPlayer() {
  player.currentHealth += 10
  enemyTurn()
  drawPlayer()
  drawCurrentEnemy()
}

function attackEnemy() {
  currentEnemy.health -= player.attackPower
  enemyTurn()
  drawPlayer()
  drawCurrentEnemy()
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = `${player.currentHealth}`
  document.getElementById('hero-level').innerText = `${player.level}`
}

function drawCurrentEnemy() {
  document.getElementById('enemy-type').innerText = currentEnemy.type
  document.getElementById('enemy-health').innerText = currentEnemy.health
}

function enemyTurn() {
  player.currentHealth -= Math.floor(Math.random() * currentEnemy.maxAttackPower)
}

