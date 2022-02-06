//Ship factory function
const shipFactory = (name, shipHitBoxes) => {
    //getting the name of the ship
    let shipName = name;

    //an array that houses the hitbox's position on the ship, and whether that position has been hit
    let hitBoxPosition = new Array();

    for (let i = 0; i < shipHitBoxes; i++) {
        var isHit = false;
        hitBoxPosition.push(isHit);
      }
    

    return { shipName, hitBoxPosition, shipHitBoxes }

};

export { shipFactory }