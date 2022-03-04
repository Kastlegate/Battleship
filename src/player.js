import { shipFactory } from './ships.js';
import { gameboardFactory } from './gameboards.js'


const playerFactory = (playername) => {

    //creates the gameboard for the player
    const gameboard = gameboardFactory();
    
    // variable for a player's name
    let name = playername;
    // creates a random number for the computer to use as quardinates
    function computerBrain(max) {
        return Math.floor(Math.random() * max);
      }

    function setComputerShips(array){        

        array.forEach(element => {
            let x = computerBrain(10);
            let y = computerBrain(10);
            
            // while loop that runs through the array of ships and generates random position on the board for each ship
            while(gameboard.setShipOnGrid(element, x, y) === false){
                x = computerBrain(10);
                y = computerBrain(10);                
            }
            gameboard.setShipOnGrid(element, x, y)
            // console.log(x, y)
            // console.log(gameboard.grid[x][y])
        });
        // console.log(gameboard.grid)
    }
    //function that sets player ships
    function setPlayerShips(){
        // creating the ships for the board
        const carrier = shipFactory('Carrier', 5);
        const battleship = shipFactory('Battleship', 4);
        const cruiser = shipFactory('Cruiser', 3);
        const submarine = shipFactory('Submarine', 3);
        const destroyer = shipFactory('Destroyer', 2);

        if(name === 'player'){
            gameboard.setShipOnGrid(carrier, 9, 0)
            gameboard.setShipOnGrid(battleship, 1, 2)
            gameboard.setShipOnGrid(cruiser, 4, 5)
            gameboard.setShipOnGrid(submarine, 6, 7)
            gameboard.setShipOnGrid(destroyer, 9, 8)
        }
    
        else if(name === 'computer'){
            let shipsArray = [carrier, battleship, cruiser, submarine, destroyer];
            setComputerShips(shipsArray)
        }  
    }
    setPlayerShips()
    
    function sendAttack(enemy, x, y){ 
        // A check to see if the sent attack is valid 
        var validCheck = false;
        if(name === 'player'){
            
            if (enemy.gameboard.grid[x][y].shipHP || enemy.gameboard.grid[x][y] === 'water'){
                console.log("Sending attack")  
                console.log(enemy.gameboard.grid[x][y])    
                enemy.gameboard.recieveAttack(x, y);
                console.log(enemy.name + "'s ship has been hit")
                validCheck = true;
                return validCheck         
            }
        }
        else if (name === 'computer'){
            let pcX = computerBrain(10);
            let pcY = computerBrain(10);
            var i = 0;

            
            while(enemy.gameboard.grid[pcX][pcY] === 'miss' || enemy.gameboard.grid[pcX][pcY] === 'hit'){
                pcX = computerBrain(10);
                pcY = computerBrain(10);
                i++
            }
            enemy.gameboard.recieveAttack(pcX, pcY);
            // console.log(enemy.name + " board hit below")
            // console.log(enemy.gameboard.grid)
            console.log('invalid computer plays ' + i)           
        }
        
    }

    return {name, gameboard, sendAttack, setPlayerShips, setComputerShips}

}

export { playerFactory, }