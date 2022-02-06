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
    ship.hitBoxPosition[2] = true
    expect((ship.hitBoxPosition[2])).toBe(true);
  }); 