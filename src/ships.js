//Ship factory function
const shipFactory = (name, hp, align) => {
    //getting the name of the ship
    let shipName = name;
    let alignment = align;
    let hitpoints = hp
    var shipHP = [hitpoints];

    //an array that houses each hitbox's position on the ship
    // let hitBoxPosition = new Array();
    // for loop that creates each hitbox for each ship, and sets it being hit to false
    // for (let i = 0; i < shipHitBoxes; i++) {
    //     var isHit = shipHP - 1;
    //     hitBoxPosition.push(isHit);
    //   }  
     
    function hit(){
      
      shipHP[0] = shipHP[0] - 1;    
    }

    // function isHitCheck(value){
    //   return value === shipName + ' hit';
    // }

    function isSunk(){
      let sunk = false;
      if (shipHP[0] === 0){
        sunk = true;
      }

      return sunk
    }

    return { shipName, shipHP, hit, isSunk, alignment }
};



export { shipFactory }