import { playerFactory } from './player.js'


test('created player has a working gamboard layout', () => {
    let player = playerFactory("player");
    expect((player.gameboard.grid[5][5])).toBe('water');
  }); 

test('created player has a ship on given quardinates', () => {
    let player = playerFactory("player");
    expect((player.gameboard.grid[9][0].shipName)).toBe('Carrier');
}); 


