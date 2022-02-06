import { shipFactory } from './ships.js';



// testing shipFactory
test('test ship name', () => {
  const ship = shipFactory('Battleship', 4);
    expect((ship.shipName)).toBe("Battleship");
  });

test('ship position hit is false', () => {
  const ship = shipFactory('Battleship', 4);
    expect((ship.hitBoxPosition[2])).toBe(false);
  }); 

test('ship position hit is true', () => {
    const ship = shipFactory('Battleship', 4);
    ship.hit(3);
    expect((ship.hitBoxPosition[3])).toBe(true);
  }); 

test('ship is not sunk', () => {
    const ship = shipFactory('Battleship', 4);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);

    console.log(ship.isSunk())
    expect((ship.isSunk())).toBe(false);
  }); 

  test('ship is sunk', () => {
    const ship = shipFactory('Battleship', 4);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);

    console.log(ship.isSunk())
    expect((ship.isSunk())).toBe(true);
  }); 

  