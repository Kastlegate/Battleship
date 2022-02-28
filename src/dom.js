import { playerFactory } from './player.js'




//resets the game
function resetGame(player, enemy){
    //ceates a reference variable for the player's grids
    let gridLocation = document.getElementById(player.name + "Grid");
    let enemyGridLocation = document.getElementById(enemy.name + "Grid");
    gridLocation.textContent = '';
    enemyGridLocation.textContent = '';
    player.gameboard.resetGrid();
    enemy.gameboard.resetGrid();
    createGameboard(player, enemy);
    createGameboard(enemy, player)
}

//creates a grid from the gameboard grid
function createGameboard(player, enemy){
    // // creates variables of the players names
    // let playerRound2 = player;
    // let enemyRound2 = enemy;
    // function thatreturns true if all of a boards ships have been sunk
    function gameOver(checkships){
        return checkships.gameboard.sunkenShipCheck();
    }
    //ceates a reference variable for the player's grids
    let gridLocation = document.getElementById(player.name + "Grid");
    let enemyGridLocation = document.getElementById(enemy.name + "Grid");
    // resets the grids to empty so it can be rebuilt with the updated information
    gridLocation.textContent = '';

    

    // function for random number
    function computerBrain(max) {
        return Math.floor(Math.random() * max);
      }
    
      // function that creates an attack from a click event
    function fireShot(evt){
        var x = evt.target.getAttribute("data-x");
        var y = evt.target.getAttribute("data-y");
        var name = evt.target.getAttribute("data-name");
       
        // in this situation, enemy is the player and player is the computer
        if (enemy.sendAttack(player, x, y) === true){
            enemy.sendAttack(player, x, y)
            createGameboard(player, enemy)
            if(gameOver(player) === true || gameOver(enemy) === true){
                alert(enemy.name + ' has sunk all of ' + player.name + "'s ships")
                resetGame(player, enemy)
            }
            else{
                player.sendAttack(enemy, x, y)
                enemy.gameboard.sunkenShipCheck();
                createGameboard(enemy, player)
            }

            if(gameOver(player) === true || gameOver(enemy) === true){
                alert(player.name + ' has sunk all of ' + enemy.name + "'s ships")
                resetGame(player, enemy)
                }
        }
        }
   
    function createGrid(){
        player.gameboard.grid.forEach(element => {
            var x = Number(player.gameboard.grid.indexOf(element))
            var y = 0;
            player.gameboard.grid[x].forEach(element => {
                
                //creates each quardinate div and adds it to the grid
                let quardinate = document.createElement('div')
                    quardinate.dataset.x = x;
                    quardinate.dataset.y = y;
                    quardinate.dataset.name = player.name;
                    y = y + 1;
                
                // if check that checks the array's content and assigns a class for displaying the content
                if(element === 'hit'){
                    quardinate.classList.add('shipHit')
                }                
                else if (element === 'water'){
                    quardinate.classList.add('fogOfWar')
                }                
                else if (element.shipHP){
                    quardinate.classList.add('fogOfWar')
                }
                else if (element === 'miss'){
                    quardinate.classList.add('water')
                }               
                if (player.name === 'computer'){
                quardinate.addEventListener("click", fireShot, false)
                }
                // adds the new quardinate to the grid
                gridLocation.appendChild(quardinate)
                
            });  
        });
    }
    createGrid()
    return { createGrid, gameOver }
}


export { createGameboard, }