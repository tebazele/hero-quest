function toggleStartStage() {
  document.querySelector(`#stage-${currentStage}-screen .start-stage`)?.classList.toggle('d-none')
}

document.querySelectorAll('.start-stage').forEach(b => {
  // @ts-ignore
  b.onclick = () => {
    toggleStartStage()
  }
})

document.querySelector('.run-button').addEventListener('click', toggleStartStage)


function pickRandomEnemyFromCurrentStage() {
  let stageEnemies = null

  if (currentStage == 1) {
    stageEnemies = stage1Enemies
  }

  if (currentStage == 2) {
    stageEnemies = stage1Enemies
  }

  if (currentStage == 3) {
    stageEnemies = stage1Enemies
  }

  let i = Math.floor(Math.random() * stageEnemies.length)
  return { ...stageEnemies[i] }
}