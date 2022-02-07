import { gameboardFactory } from './gameboards.js'
import { shipFactory } from './ships.js';  

test('gameBoard array works as expected', () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2)
    player.gameboard[9][4] = destroyer.hitBoxPosition[0];
    player.gameboard[9][5] = destroyer.hitBoxPosition[1];    

    expect((player.gameboard[9][5])).toBe(destroyer.hitBoxPosition[1]);
    });

test("Tests the setShipOnGameboard function", () => {
    const player = gameboardFactory();
    const destroyer = shipFactory("Destroyer", 2) 
    const carrier = shipFactory("Carrier", 5) 

    player.setShipOnGameboard(destroyer, 8, 0)

    expect((player.setShipOnGameboard(carrier, 9, 0))).toBe("Carrier");
    });