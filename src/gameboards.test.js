import { gameboardFactory } from './gameboards.js'
import { shipFactory } from './ships.js';  

test('gameBoard array works as expected', () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2)
    player.gameboard[9][4] = destroyer;
    player.gameboard[9][5] = destroyer;    

    expect((player.gameboard[9][5])).toBe(destroyer);
    });

    
test("Tests the checkForShips function to be true", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5)
    player.gameboard[9][4] = carrier.shipName;
    player.gameboard[9][5] = carrier;

    expect((player.checkForShips(carrier, 9, 5))).toBe(true);
    });

test("Tests the checkForShips function to be false", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5)
    player.gameboard[9][4] = destroyer;
    player.gameboard[9][5] = destroyer;
    

    expect((player.checkForShips(carrier, 9, 0))).toBe(false);
    });

test("Tests the setShipOnGameboard function", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGameboard(destroyer, 9, 8)
    expect((player.gameboard[9][9])).toBe(destroyer);
    });

test("Tests the recieveAttack function", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGameboard(destroyer, 9, 8)
    player.recieveAttack(9, 8)
    expect((destroyer.shipHP[0])).toBe(1);
    });

test("Tests the recieveAttack function checks for misses", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGameboard(destroyer, 9, 4)
    player.recieveAttack(9, 8)
    player.recieveAttack(9, 9)
    expect((player.gameboard[9][9])).toBe('miss');
    });

test("Tests the recieveAttack function can sink ships", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 
    player.setShipOnGameboard(destroyer, 9, 8)
    console.log(player.gameboard)
    player.recieveAttack(9, 8)
    player.recieveAttack(9, 9)
    console.log(player.gameboard)
    expect((destroyer.isSunk())).toBe(true);
    });