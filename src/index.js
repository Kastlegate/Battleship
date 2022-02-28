import { playerFactory } from './player.js'
import { createGameboard } from './dom.js';
import { gameFlow } from './gameFlow.js';
import './style.css';


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

//player Container
let playerContainer = document.createElement('div')
playerContainer.id = 'playerContainer'
playerContainer.classList.add('container');
gameContainer.appendChild(playerContainer)

//player Banner
let playerBanner = document.createElement('div')
playerBanner.id = 'playerBanner';
playerBanner.textContent = 'Player';
playerBanner.classList.add('banner');
playerContainer.appendChild(playerBanner)

// grid for the players gameboard
let playerGrid = document.createElement('div');
playerGrid.id = 'playerGrid'
playerGrid.classList.add('grid')
playerContainer.appendChild(playerGrid);

// divider between gameboards
let divider = document.createElement('div');
divider.id = 'divider'
gameContainer.appendChild(divider);

//player Container
let computerContainer = document.createElement('div')
computerContainer.id = 'computerContainer'
computerContainer.classList.add('container');
gameContainer.appendChild(computerContainer)

//player Banner
let computerBanner = document.createElement('div')
computerBanner.id = 'computerBanner';
computerBanner.textContent = 'Computer';
computerBanner.classList.add('banner');
computerContainer.appendChild(computerBanner)

// grid for the players gameboard
let computerGrid = document.createElement('div');
computerGrid.id = 'computerGrid'
computerGrid.classList.add('grid')
computerContainer.appendChild(computerGrid);

gameFlow()

