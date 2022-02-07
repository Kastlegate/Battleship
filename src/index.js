import { shipFactory } from './ships.js';  
import { gameboardFactory } from './gameboards.js';

const battleship = shipFactory('Battleship', 4);
const gameboard = gameboardFactory();
console.log(battleship.shipName);
console.log(battleship.hitBoxPosition[2]);