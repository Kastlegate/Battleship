import { gameboardFactory } from './gameboards.js'
import { shipFactory } from './ships.js';  

test('grid array works as expected', () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2)
    player.grid[9][4] = destroyer;
    player.grid[9][5] = destroyer; 
    console.log(player.grid[9][5])  

    expect((player.grid[9][5])).toBe(destroyer);
    });

    
test("Tests the checkForShips function to be true", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5)
    player.grid[9][4] = carrier.shipName;
    player.grid[9][5] = carrier;

    expect((player.checkForShips(carrier, 9, 5))).toBe(true);
    });

test("Tests the checkForShips function to be false", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5)
    player.grid[9][4] = destroyer;
    player.grid[9][5] = destroyer;
    

    expect((player.checkForShips(carrier, 9, 0))).toBe(false);
    });

test("Tests the setShipOnGrid function", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGrid(destroyer, 9, 8)
    expect((player.grid[9][9])).toBe(destroyer);
    });

test("Tests the recieveAttack function", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGrid(destroyer, 9, 8)
    player.recieveAttack(9, 8)
    expect((destroyer.shipHP[0])).toBe(1);
    });

test("Tests the recieveAttack function checks for misses", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGrid(destroyer, 9, 4)
    player.recieveAttack(9, 8)
    player.recieveAttack(9, 9)
    expect((player.grid[9][9])).toBe('miss');
    });

test("Tests the recieveAttack function can sink ships", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGrid(destroyer, 9, 8)
    player.recieveAttack(9, 8)
    player.recieveAttack(9, 9)
    expect((destroyer.isSunk())).toBe(true);
    });

    // test.only("Tests the gridReset function resets gameboard grids", () => {
    //     const player = gameboardFactory();
    //     const destroyer = shipFactory("Destroyer", 2) 
    //     const carrier = shipFactory("Carrier", 5) 
    //     player.setShipOnGrid(destroyer, 9, 8)
    //     player.resetGrid()

    //     expect(player.grid[9][8]).toBe('water');
    //     });

// test("Tests the recieveAttack function can report sunken ships", () => {
//     const player = gridFactory();
//     const carrier = shipFactory('Carrier', 5);
//     const battleship = shipFactory('Battleship', 4);
//     const cruiser = shipFactory('Cruiser', 3);
//     const submarine = shipFactory('Submarine', 3);
//     const destroyer = shipFactory('Destroyer', 2);

//     player.setShipOnGrid(carrier, 2, 4)
//     player.setShipOnGrid(battleship, 1, 2)
//     player.setShipOnGrid(cruiser, 4, 5)
//     player.setShipOnGrid(submarine, 6, 7)
//     player.setShipOnGrid(destroyer, 9, 8)

//     player.recieveAttack(2, 4)
//     player.recieveAttack(2, 5)
//     player.recieveAttack(2, 6)
//     player.recieveAttack(2, 7)
//     player.recieveAttack(2, 8)

//     player.recieveAttack(1, 2)
//     player.recieveAttack(1, 3)
//     player.recieveAttack(1, 4)
//     player.recieveAttack(1, 5)

//     player.recieveAttack(4, 5)
//     player.recieveAttack(4, 6)
//     player.recieveAttack(4, 7)

//     player.recieveAttack(6, 7)
//     player.recieveAttack(6, 8)
//     player.recieveAttack(6, 9)

//     player.recieveAttack(9, 8)
//     player.recieveAttack(9, 9)




//     expect((player.sunkenShipsCheck(destroyer))).toBe(true);
//     });