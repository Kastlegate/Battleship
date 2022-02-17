import { shipFactory } from './ships.js';  

const gameboardFactory = () => {
    
    //creating the ships for each gameboard
    // const carrier = shipFactory('Carrier', 5);
    // const battleship = shipFactory('Battleship', 4);
    // const cruiser = shipFactory('Cruiser', 3);
    // const submarine = shipFactory('Submarine', 3);
    // const destroyer = shipFactory('Destroyer', 2);

    //variable that keeps track of misses
    let misses = Array();

    //creates the array for the gameboard
    let gameboard = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), 
    new Array(10), new Array(10), new Array(10), new Array(10)];

    
    //creates the gameboard with positions filled with 'water'
    for(let row = 0; row < gameboard.length; ++row)
    {
        // console.log("row " + row)       
        for(let column = 0; column < gameboard[row].length; ++column){
            // console.log("column: " + column)
            gameboard[row][column] = "water";
        }
    }

     //function that checks if a ship is the given quardinates
     function checkForShips(ship, x, y){
        let watersAreClear;
        let lengthCheck = ship.shipHP;
        let newYPosition = y;
        for (let i = 0; i < lengthCheck; ++i){
            if(gameboard[x][newYPosition] === "water"){
                watersAreClear = true;
            }
            else {
                watersAreClear = false;
            }
            ++newYPosition
        }
        return watersAreClear;
    }

    // function to place ship inside the gameboard array
    function setShipOnGameboard(ship, xPosition, yPosition){
        // let name = ship.shipName;
        let x = xPosition;
        let y = yPosition;
        let lengthCheck = Number(ship.shipHP)

        // if statement that checks if the length of the ship can fit on the gameboard
        // quardinates given, and if the quardinates already houses another ship
        if (y + lengthCheck < 11 && checkForShips(ship, x, y)){
    
            let newYPosition = y;
            for (let i = 0; i < lengthCheck; i++){
                gameboard[x][newYPosition] = ship;
                newYPosition++
            }                
        }

        else
        {
            console.log("Could not place ship")
        }

        

        
        
    }

    //function to recieve an attack
    function recieveAttack(xPosition, yPosition){
        let x = xPosition;
        let y = yPosition;

        if (gameboard[x][y] === 'water'){
            gameboard[x][y] = 'miss'
            // DOES THIS SOLUTION WORKOUT KASEY? SOUBLE CHECK
            misses.push(x, y)
            console.log(misses);
        }
        else if (gameboard[x][y] === 'miss'){
            console.log('this was already a played position')
        }

        else if (gameboard[x][y].shipHP){
            gameboard[x][y].hit()
            gameboard[x][y] = 'hit'
        }


        
    }


    return { gameboard, setShipOnGameboard, checkForShips, recieveAttack }
};

export { gameboardFactory }