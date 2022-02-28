//Ship factory function
const shipFactory = (name, hp, align) => {
    
    let shipName = name;
    let alignment = align;
    let hitpoints = hp
    var shipHP = [hitpoints];
     
    function hit(){      
      shipHP[0] = shipHP[0] - 1; 
      isSunk()   
    }

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