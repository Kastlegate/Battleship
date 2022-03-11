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

    // variables for the computer's smarter moves
    let computerHitAShip = false;
    // let computersInitialHit = new Array();
    let computerSavedX;
    let computerSavedY;
    let computerShouldContinueEast = true;
    let computerShouldContinueWest = true;
    let i = 1;

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
        //if that handles the human player
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
        // else if part of the statement that handles the computer AI attcks
        else if (name === 'computer'){
            let randomX = computerBrain(10);
            let randomY = computerBrain(10);
            
            
            // if the computer has not hit a ship on the player's board, this statement will 
            // continue to perform random attacks on the player's board
            if (computerHitAShip === false){
                //while loop that randomizes quardinates until a legal move can be made
                while(enemy.gameboard.grid[randomX][randomY] === 'miss' || enemy.gameboard.grid[randomX][randomY] === 'hit'){
                    console.log('player board: ' + enemy.gameboard.grid[randomX][randomY])
                    randomX = computerBrain(10);
                    randomY = computerBrain(10);
                    // i++
                }

                console.log('player board: ' + enemy.gameboard.grid[randomX][randomY])
                //sends the legal attack to the human player's board
                enemy.gameboard.recieveAttack(randomX, randomY);

                // check to see if the computer landed a hit
                if (enemy.gameboard.grid[randomX][randomY] === 'hit'){
                    // creates an initial set of quardinates that the computer can 
                    // return to in the search for an enemy ship that has been hit
                    if(computerHitAShip === false){
                        computerSavedX = randomX;
                        computerSavedY = randomY;
                    }
                    // now that the computer has hit a ship, computerHitAShip will be set to true
                    // so the computer's behavior can be adjusted
                    computerHitAShip = true;
                    

                    // computersInitialHit.push(randomX)
                    // computersInitialHit.push(randomY)
                    console.log(computerSavedX, computerSavedY)
                }

            }

            // else if that plays around a hit quardinate if the computer lands a hit on a ship
            else if(computerHitAShip === true){

                // creates a variable that increments the saved computerY position, moving the
                // computers guess to the right of the computer's saved X position, until it fails to find a ship
                let computerGoingEast = computerSavedY + i;
                
                // if statement that checks to see if the computer should check quardinates to the east of
                // a hit ship
                if(computerShouldContinueEast === true){
                    //if statement that checks if a legal move can be made by the computer attacking to the east
                    // of a hit ship. if the path to the right does not equal a miss, hit, or is out of bounds
                    // for the grid array, it will not continue east
                    if(enemy.gameboard.grid[computerSavedX][computerGoingEast] != 'miss' 
                        && enemy.gameboard.grid[computerSavedX][computerGoingEast] != 'hit'
                        && computerGoingEast < 10){
    
                            enemy.gameboard.recieveAttack(computerSavedX, computerGoingEast);
                            console.log('before i ' + i)
                            ++i
                            console.log('after i ' + i)
                            // ++computerGoingEast
                            console.log('before computergopingeast' + computerGoingEast + ' i ' + i)
    
                            if (enemy.gameboard.grid[computerSavedX][computerGoingEast] === 'miss'
                            || enemy.gameboard.grid[computerSavedX][computerGoingEast + 1] === 'miss'  
                            || enemy.gameboard.grid[computerSavedX][computerGoingEast + 1] === 'hit'
                            || computerGoingEast > 9){
                                computerShouldContinueEast = false;
                                console.log('computerShouldContinueEast = ' + computerShouldContinueEast)
                                i = 1;
                            }
                            
                    }
                    else{
                        computerShouldContinueEast = false;
                        console.log('computerShouldContinueEast = ' + computerShouldContinueEast)
                        i = 1;
                    }
                } 
                
            
            }
            // console.log('Computer hit a ship = ' + computerHitAShip)
            // console.log('invalid computer plays ' + i)           
        }
        
    }

    return {name, gameboard, sendAttack, setPlayerShips, setComputerShips}

}

export { playerFactory, }