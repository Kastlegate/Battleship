import { playerFactory } from './player.js'
import { createGameboard } from './dom.js';
import './style.css';

let player = playerFactory("player");
let computer = playerFactory("computer");
let turnSwitch = 1;


// Banner for Battleship name display
let gameBanner = document.createElement('div');
    gameBanner.id = 'gameBanner';
    document.body.appendChild(gameBanner)

// Battleship name display
let gameName = document.createElement('h1');
    gameName.id = 'gameName';
    gameName.textContent = 'BATTLESHIP';
    gameBanner.appendChild(gameName);

// container for the game, its player's grids and dividers.
let gameContainer = document.createElement('div');
gameContainer.id = "gameContainer";
document.body.appendChild(gameContainer);

// grid for the players gameboard
let playerGrid = document.createElement('div');
playerGrid.id = 'playerGrid'
playerGrid.classList.add('grid')
gameContainer.appendChild(playerGrid);

// divider between gameboards
let divider = document.createElement('div');
divider.id = 'divider'
gameContainer.appendChild(divider);

// grid for the computers gameboard
let computerGrid = document.createElement('div');
computerGrid.id = 'computerGrid'
computerGrid.classList.add('grid')
gameContainer.appendChild(computerGrid);


createGameboard(player);
createGameboard(computer);
