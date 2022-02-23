import { shipFactory } from './ships.js';



// testing shipFactory
test('test ship name', () => {
  const ship = shipFactory('Battleship', 4);
    expect((ship.shipName)).toBe("Battleship");
  });

test('ship function hit reduces shipHP', () => {
    let ship = shipFactory('Battleship', 4, "vertical");
    // console.log(Number(ship.shipHP))
    ship.hit()
    expect((ship.shipHP[0])).toBe(3);
  }); 

test('ship is not sunk', () => {
    const ship = shipFactory('Battleship', 4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect((ship.isSunk())).toBe(false);
  }); 

test('ship is sunk', () => {
  const ship = shipFactory('Battleship', 4);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect((ship.isSunk())).toBe(true);
}); 

  