import { shipFactory } from './ships.js';  

const gameboardFactory = () => {
    
    //creating the ships for each gameboard
    // const carrier = shipFactory('Carrier', 5);
    // const battleship = shipFactory('Battleship', 4);
    // const cruiser = shipFactory('Cruiser', 3);
    // const submarine = shipFactory('Submarine', 3);
    // const destroyer = shipFactory('Destroyer', 2);

    let gameboard = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), new Array(10), 
    new Array(10), new Array(10), new Array(10), new Array(10)];

    // console.log(gameboard)

    for(let row = 0; row < gameboard.length; ++row)
    {
        // console.log("row " + row)
       
        
        for(let column = 0; column < gameboard[row].length; ++column){
            // console.log("column: " + column)
            gameboard[row][column] = "water";
        }
    }

    // function to place ship inside the gameboard array
    function setShipOnGameboard(ship, xPosition, yPosition){
        // let name = ship.shipName;
        let x = xPosition;
        let y = yPosition;
        let lengthCheck = ship.shipHitBoxes;

        //function that checks if a ship is already in the position
        function checkForOtherShips(){
            let watersAreClear = true;
            let newYPosition = y;
            for (let i = 0; i < lengthCheck; ++i){
                if(gameboard[x][newYPosition] === "water"){
                    console.log("Water's clear!")
                }
                else {
                    console.log("Already a ship here!")
                    watersAreClear = false;
                }
                ++newYPosition
            }
            return watersAreClear
        }

        // if statement that checks if the length of the ship can fit on the gameboard
        // position given, and if the position already houses another ship
        if (y + lengthCheck < 11 && checkForOtherShips()){
            
            
                let newYPosition = y;
                for (let i = 0; i < lengthCheck; i++){
                    gameboard[x][newYPosition] = ship.shipName;
                    newYPosition++
                }
                console.log(gameboard)
        }


        return  gameboard[x][y]
    }

    


    return { gameboard, setShipOnGameboard }
};

export { gameboardFactory }