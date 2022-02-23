import { playerFactory } from './player.js'
// import { gameboardFactory } from './gameboards.js'

test('created player has a working gamboard layout', () => {
    let player = playerFactory("Player");
    expect((player.gameboard.grid[5][5])).toBe('water');
  }); 

test('created player has a ship on given quardinates', () => {
    let player = playerFactory("Player");
    expect((player.gameboard.grid[2][4].shipName)).toBe('Carrier');
}); 

test('send attack function works', () => {
    let player = playerFactory("Player");
    let computer = playerFactory("Computer");
    // computer.gameboard.grid[2][4].hit()
    console.log(Number(computer.gameboard.grid[2][4].shipHP))
    // console.log(computer.gameboard.grid)
    player.sendAttack(computer, 2, 4)
    player.sendAttack(computer, 2, 4)
    console.log((Number(computer.gameboard.grid[2][5].shipHP)))

    expect((Number(computer.gameboard.grid[2][5].shipHP))).toBe(4);
}); 

