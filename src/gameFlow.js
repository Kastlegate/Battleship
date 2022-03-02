import { playerFactory } from './player.js'
import { createGameboard } from './dom.js';

function gameFlow(){
    // new players
    let player = playerFactory("player");
    let computer = playerFactory("computer");
    //creating dom gameboards
    let playerBoard = createGameboard(player, computer);
    let computerBoard = createGameboard(computer, player);
  
    // while(player.gameboard.sunkenShipCheck() === false
    //  && computer.gameboard.sunkenShipCheck() === false){

        
    // }
}

export { gameFlow }