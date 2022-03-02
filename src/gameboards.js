import { shipFactory } from './ships.js';  

const gameboardFactory = () => {

    // //array that keeps track of misses
    // let misses = Array();
    // //array that keeps track of misses
    // let hits = Array();
    // variable that keeps count of sunken ships
    let sunkenShips = 0;
    // function that checks the current ships sunk count and returns true if all are sunk
    function sunkenShipCheck (){       
        if (sunkenShips === 5){
            return true
        }
        else{
            return false;
        }
    }

    //creates the array for the gameboard's grid
    let grid = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), 
    new Array(10), new Array(10), new Array(10), new Array(10)];
    //function to reset the grid
    function resetGrid(){
        sunkenShips = 0;
        for(let row = 0; row < grid.length; ++row)
        {
            // console.log("row " + row)       
            for(let column = 0; column < grid[row].length; ++column){
                // console.log("column: " + column)
                grid[row][column] = "water";
            }
        }

    //    // creating the ships for the board
    //     const carrier = shipFactory('Carrier', 5);
    //     const battleship = shipFactory('Battleship', 4);
    //     const cruiser = shipFactory('Cruiser', 3);
    //     const submarine = shipFactory('Submarine', 3);
    //     const destroyer = shipFactory('Destroyer', 2);
    //     setShipOnGrid(carrier, 9, 0)
    //     setShipOnGrid(battleship, 1, 2)
    //     setShipOnGrid(cruiser, 4, 5)
    //     setShipOnGrid(submarine, 6, 7)
    //     setShipOnGrid(destroyer, 9, 8) 


    }
    
    //creates the grid with positions filled with 'water'
    for(let row = 0; row < grid.length; ++row)
    {
        // console.log("row " + row)       
        for(let column = 0; column < grid[row].length; ++column){
            // console.log("column: " + column)
            grid[row][column] = "water";
        }
    }

     //function that checks if a ship is the given quardinates
     function checkForShips(ship, x, y){
        let watersAreClear;
        let lengthCheck = ship.shipHP;
        let newYPosition = y;
        // for loop that takes an x coordinate and increments the y coordinate the amount of a ships HP to see if a ship can be placed on it
        for (let i = 0; i < lengthCheck; ++i){
            if(grid[x][newYPosition] === "water"){
                watersAreClear = true;
            }
            else {
                watersAreClear = false;
            }
            ++newYPosition
        }
        return watersAreClear;
    }

    // function to place ship inside the grid array
    function setShipOnGrid(ship, xPosition, yPosition){
        let x = xPosition;
        let y = yPosition;
        let lengthCheck = Number(ship.shipHP)
        let canBePlaced = false;

        // if statement that checks if the length of the ship can fit on the grid
        // quardinates given, and if the quardinates already houses another ship
        if (y + lengthCheck < 11 && checkForShips(ship, x, y)){    
            let newYPosition = y;
            for (let i = 0; i < lengthCheck; i++){
                grid[x][newYPosition] = ship;
                newYPosition++
            } 
            canBePlaced = true;             
        }  
        
        return canBePlaced;
    }

    //function that checks if ships are sunk and updates the sunken ship counter
    function sunkenShipsCheck(ship){
        if (ship.isSunk() === true){
            sunkenShips = sunkenShips + 1;
            if (sunkenShips === 5){
                return true;
            }
        }

        else if (sunkenShips < 5){
            return false;
        }
    }

    //function to recieve an attack
    function recieveAttack(xPosition, yPosition){
        let x = xPosition;
        let y = yPosition;

        if (grid[x][y] === 'water'){
            grid[x][y] = 'miss';
        }
        else if (grid[x][y] === 'miss'){
            //do nothing
        }
        
        else if (grid[x][y].shipHP > 0){
            grid[x][y].hit()
            sunkenShipsCheck(grid[x][y])
            grid[x][y] = 'hit';          
        }


        
    }


    return { grid, setShipOnGrid, checkForShips, recieveAttack, sunkenShipsCheck, sunkenShipCheck, resetGrid }
};

export { gameboardFactory }