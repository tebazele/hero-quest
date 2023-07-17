const player = {
  currentHealth: 10,
  attackPower: 1,
  gold: 0,
  potions: 0
}

function healPlayer() {
  if (player.potions > 0) {
    player.potions--
    player.currentHealth += 10
    enemyTurn()
    drawPlayer()
    drawCurrentEnemy()
  } else {
    messageUser("You don't have any potions")
  }
}

function attackEnemy() {
  enemyTurn()
  currentEnemy.health -= player.attackPower
  if (currentEnemy.health <= 0) {
    rewardPlayer()
    pickRandomEnemyFromCurrentStage()
  }
  drawPlayer()
  drawCurrentEnemy()
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' + player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  document.getElementById('enemy-type').innerText = currentEnemy.type
  document.getElementById('enemy-health').innerText = '💖'+currentEnemy.health
}

function enemyTurn() {
  const enemyDamage = Math.floor(Math.random() * currentEnemy.maxAttackPower)
  player.currentHealth -= enemyDamage
  messageUser("💔 took " + enemyDamage + " Damage ")
  if (player.currentHealth <= 0) {
    messageUser("You have died")
    showGameOver()
  }
}

function rewardPlayer() {
  player.gold += currentEnemy.gold
  if (player.gold >= 10000) {
    messageUser("Congratulations you are rich enough to stop adventuring")
    showVictory()
  }
}

function buyPotion() {
  if (player.gold >= 5) {
    player.potions++
    player.gold -= 5
    messageUser("Potions: " + player.potions)
    drawPlayer()
  } else {
    messageUser("Not Enough Gold")
  }
}

function increaseAttack() {
  if (player.gold >= 10) {
    player.attackPower += 5
    player.gold -= 10
    messageUser("Attack Up")
    drawPlayer()
  } else {
    messageUser("Not Enough Gold")
  }
}

drawPlayer()