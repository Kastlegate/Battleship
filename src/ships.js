//Ship factory function
const shipFactory = (name, shipHitBoxes) => {
    //getting the name of the ship
    let shipName = name;

    //an array that houses each hitbox's position on the ship
    let hitBoxPosition = new Array();
    // for loop that creates each hotbox for each ship, and sets it being hit to false
    for (let i = 0; i < shipHitBoxes; i++) {
        var isHit = false;
        hitBoxPosition.push(isHit);
      }  
      
    function hit(number){
      hitBoxPosition[number] = true;
    }

    function isHitCheck(value){
      return value === true;
    }

    function isSunk(){
      return hitBoxPosition.every(isHitCheck);
    }

    return { shipName, hitBoxPosition, shipHitBoxes, hit, isSunk }
};

export { shipFactory }