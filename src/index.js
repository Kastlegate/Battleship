import { shipFactory } from './ships.js';

const battleship = shipFactory('Battleship', 4);

console.log(battleship.shipName);
console.log(battleship.hitBoxPosition[2]);