import { playerFactory } from './player.js'


// creates an event for each quardinate location
function reportStatus(){
    console.log(' says hi')
}

//creates a grid from the gameboard grid
function createGameboard(player){
    console.log(player.name)
    let name = player.name;
    player.gameboard.grid.forEach(element => {
        var x = 0
        element.forEach(element => {
            var y = 0;

            let quardinate = document.createElement('div')
            let gridLocation = document.getElementById(player.name + "Grid");
            if(element.shipHP){
                quardinate.classList.add('ship')
            }
            else{
                quardinate.classList.add('water')
            }
            ++y
            quardinate.addEventListener("click", reportStatus)

            gridLocation.appendChild(quardinate)
        });
        ++x

    });
}

export { createGameboard }