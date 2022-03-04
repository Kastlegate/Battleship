import { playerFactory } from './player.js'
// import { gameboardFactory } from './gameboards.js'

test('created player has a working gamboard layout', () => {
    let player = playerFactory("player");
    expect((player.gameboard.grid[5][5])).toBe('water');
  }); 

test('created player has a ship on given quardinates', () => {
    let player = playerFactory("player");
    expect((player.gameboard.grid[9][0].shipName)).toBe('Carrier');
}); 
// this test is obsolete because of the computers random attacks and ship placements
// test('send attack function works', () => {
//     let player = playerFactory("player");
//     let computer = playerFactory("computer");
//     // player.gameboard.grid[9][3].hit()
//     console.log(Number(player.gameboard.grid[9][0].shipHP))
//     // console.log(computer.gameboard.grid)
//     computer.sendAttack(player, 9, 0)
//     player.sendAttack(computer, 9, 0)
//     console.log((Number(player.gameboard.grid[9][0].shipHP)))

//     expect((Number(computer.gameboard.grid[9][4].shipHP))).toBe(4);
// }); 

