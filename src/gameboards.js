import { shipFactory } from './ships.js';  

const gameboardFactory = () => {
    
    //creating the ships for each grid
    // const carrier = shipFactory('Carrier', 5);
    // const battleship = shipFactory('Battleship', 4);
    // const cruiser = shipFactory('Cruiser', 3);
    // const submarine = shipFactory('Submarine', 3);
    // const destroyer = shipFactory('Destroyer', 2);

    //array that keeps track of misses
    let misses = Array();

    //array that keeps track of misses
    let hits = Array();

    // variable that keeps count of sunken ships
    let sunkenShips = 0;

    //creates the array for the gameboard's grid
    let grid = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), 
    new Array(10), new Array(10), new Array(10), new Array(10)];

    
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
        // let name = ship.shipName;
        let x = xPosition;
        let y = yPosition;
        let lengthCheck = Number(ship.shipHP)

        // if statement that checks if the length of the ship can fit on the grid
        // quardinates given, and if the quardinates already houses another ship
        if (y + lengthCheck < 11 && checkForShips(ship, x, y)){
    
            let newYPosition = y;
            for (let i = 0; i < lengthCheck; i++){
                grid[x][newYPosition] = ship;
                newYPosition++
            }                
        }

        else
        {
            console.log("Could not place ship")
        }

        

        
        
    }



    //function that checks if ships are sunk and updates the sunken ship counter
    function sunkenShipsCheck(ship){
        if (ship.isSunk() === true){
            sunkenShips = sunkenShips + 1;
            if (sunkenShips === 5){
                console.log("All ships are sunk")
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
            misses.push(x, y);
        }
        else if (grid[x][y] === 'miss'){
            
        }
        //
        else if (grid[x][y].shipHP > 0){
            grid[x][y].hit()
            sunkenShipsCheck(grid[x][y])
            console.log("hit ship below")
            console.log(grid[x][y])
            grid[x][y] = 'hit';
            hits.push(x, y);           
        }


        
    }


    return { grid, setShipOnGrid, checkForShips, recieveAttack, sunkenShipsCheck }
};

export { gameboardFactory }