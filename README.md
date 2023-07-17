⚔️ Hero's Quest ⚔️
==================

Hero's Quest is a Web application game where the user controls a player through various stages and several enemies to reach the goal of achieving `10,000 🪙` . To reach this goal the user will have to slay several monsters and spend that precious gold to upgrade their health and attack power.

## The Setup

A lot of the HTML and CSS for this project has already been completed. There are also several helper functions that can be called at appropriate times to facilitate the tricky parts of this application. By the end of this project students will have acquired a deeper understanding of building web applications and specifically event driven programming. 

## Getting Started

There are 3 main `js` files that students are expected to complete. Students will also have to update portions of the `index.html` document to help wire up buttons and gain hooks needed for various changes. Follow along with this readme as opposed to jumping around. 

### The Screen Manager

To get started take a look at the `screen-manager.js` and we will wire up the buttons needed to show and hide the various screens. 

Declare variables using `document.getElementById('element-id')` for each screen elements. You can look at the `index.html` to find each screen and its corresponding id.

to select each screen element by its ID and assign them to their respective variables. For example:

```js
let startScreen = document.getElementById('start-screen');
let mapScreen = document.getElementById('map-screen');
let stage1Screen = document.getElementById('stage-1-screen');
// ...
```

Make sure the IDs match the corresponding HTML elements in your HTML file.

* Look at the pre-define `hideActiveScreen()` function:

  + This function uses `document.querySelector('.screen.show')` to select the currently active screen element. It Uses the `?.` optional chaining operator to check if there is an active screen element before attempting to remove the show class from it.

* The `showStartStage1()` function:

  + Call the `hideActiveScreen()` function to hide any currently active screen. Then using the defined variable from above add the `.show` class to the `stage1Screen` using `classList.add`
Define similar functions for the other screens ( `showStage2()` , `showStage3()` , `showVictory()` , `showGameOver()` ): Reference the provided `showMap()` function as a reference. We will worry about how to call these in a future step. 

### The Game-Manager

This is going to be the file that makes up the bulk of your actual game. Many of the functions that you are going to need have been stubbed out but they are lacking the actual code needed to perform their tasks. Below we will guide you through the logic needed for each function. 

* The `drawPlayer()` function:

  + Use `document.getElementById('element-id')` to select specific HTML elements representing the player's attributes.
  + Update the inner text of these elements to display the corresponding player attributes. For example:

```js
document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth;
```

* The `drawCurrentEnemy()` function:

  + Use `document.getElementById('element-id')` to select specific HTML elements representing the current enemy's attributes.
  + Update the inner text of these elements to display the corresponding enemy attributes. For example:

```js
document.getElementById('enemy-type').innerText = currentEnemy.type;
```

* The `attackEnemy()` function:

  + Call the `enemyTurn()` function. 
  + Reduce the current enemy's health by the player's attack power `(currentEnemy.health -= player.attackPower)`.
  + If the current enemy's health is less than or equal to 0, call the `rewardPlayer()` function, and then select a random enemy from the current stage using the `pickRandomEnemyFromCurrentStage()` function.
  + Update the player and enemy information on the screen by calling the `drawPlayer()` and `drawCurrentEnemy()` functions.

* The `healPlayer()` function:

  + Check if the player has potions `(player.potions > 0)`.
  + If so, decrement the number of potions, increase the player's health by `10`, call the `enemyTurn()` function, and update the player and enemy information on the screen by calling the `drawPlayer()` and `drawCurrentEnemy()` functions.
  + If the player has no potions, display a message to the user using the `messageUser('You have no Potions')` function.

* The `enemyTurn()` function:

  + Calculate a random damage value within the enemy's maximum attack power `(Math.floor(Math.random() * currentEnemy.maxAttackPower))`.
  + Reduce the player's current health by the calculated damage value `(player.currentHealth -= enemyDamage)`.
  + Display a message to the user indicating the damage taken using the `messageUser()` function.
  + If the player's current health reaches `0` or below, display a death message using the `messageUser()` function and call the `showGameOver()` function.

* The `rewardPlayer()` function:

  + Increase the player's gold by the amount of gold carried by the current enemy `(player.gold += currentEnemy.gold).`
  + If the player's gold reaches or exceeds `10,000`, display a victory message using the `messageUser()` function and call the `showVictory()` function.

* The `buyPotion()` function:

  + Check if the player has enough gold to buy a potion `(player.gold >= 5)`.
  + If so, increment the number of potions, deduct the required gold, display a message indicating the new potion count, and update the player information on the screen by calling the `drawPlayer()` function.
  + If the player does not have enough gold, display a message using the `messageUser()` function.

* The `increaseAttack()` function:

  + Check if the player has enough gold to increase their attack power `(player.gold >= 10)`.
  + If so, increase the player's attack power, deduct the required gold, display a message indicating the attack power increase, and update the player information on the screen by calling the `drawPlayer()` function.
  + If the player does not have enough gold, display a message using the `messageUser()` function.
  + Finally, call the drawPlayer() function at the end of the script to display the initial player information on the screen.

Good luck building your game!
