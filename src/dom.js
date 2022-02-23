import { playerFactory } from './player.js'





//creates a grid from the gameboard grid
function createGameboard(player, enemy){
    
    let name = player.name;
    let enemyName = enemy.name;
    let gridLocation = document.getElementById(player.name + "Grid");
    gridLocation.textContent = '';
    function computerBrain(max) {
        return Math.floor(Math.random() * max);
      }
    

    function fireShot(evt){
        var x = evt.target.getAttribute("data-x");
        var y = evt.target.getAttribute("data-y");
        var name = evt.target.getAttribute("data-name");
        if (enemy.sendAttack(player, x, y) === true){
            setTimeout(function(){
                player.sendAttack(enemy, x, y)
                createGameboard(enemy, player)
            }, computerBrain(3000));
        }
   
        enemy.sendAttack(player, x, y)
        createGameboard(player, enemy)
    }


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
            // water and mist are backwards. That's bad.
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

            gridLocation.appendChild(quardinate)
            
        });
       

    });
}

export { createGameboard }