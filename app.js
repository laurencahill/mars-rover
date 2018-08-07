//rover object is created, default direction is north and default coordinates are (0,0)
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

//switch statement tells the rover where to face based on turning left from its case direction
function turnLeft(rover){
  switch (rover.direction) {
    case "N": rover.direction = "W";
    break;
    case "W": rover.direction = "S";
    break;
    case "S": rover.direction = "E";
    break;
    case "E": rover.direction = "N";
    break;
  }
console.log("I am turning left!");
}

//switch statement tells the rover where to face based on turning right from it's case direction
function turnRight(rover){
  switch (rover.direction) {
    case "N": rover.direction = "E";
    break;
    case "E": rover.direction = "S";
    break;
    case "S": rover.direction = "W";
    break;
    case "W": rover.direction = "N";
    break;
  }
console.log("I am turning right!");
}

//switch statement tells the rover where to move based on its case direction and coordinate
function moveForward(rover){
  switch (rover.direction){
    case "N":
      if (rover.x === 0){
        console.log("I am as far north as I can go")
      }
      else {
        rover.x -= 1;
      }
      break;
    case "W":
      if (rover.y === 0){
        console.log("I am as far west as I can go")
      } else {
        rover.y -= 1;
      }
      break;
    case "S":
      if (rover.x === 9){
        console.log("I am as far south as I can go")
      } else {
        rover.x += 1;
      }
      break;
    case "E":
      if (rover.y === 9) {
        console.log("I am as far east as I can go")
      } else {
        rover.y += 1;
      }
      break;
  }
console.log("I am moving forward!")
}

//loop statement tells the rover to move f, l or r based on what function is called
function moveRover(command) {
  for (var i = 0; i < command.length; i++) {
    if (moveRover(i) === "f") {
      moveForward(rover);
    }
    else if (moveRover(i) === "l") {
      turnLeft(rover);
    }
    else if (moveRover(i) === "r") {
      turnRight(rover);
    }
    else {continue}
  }
   console.log ("Rover is on the move!");
}

//string statement pushes rover coordinates to travelLog array, creates a history
function command(str){
    for(var i = 0; i < str.length; i++){
      if(str[i] !== "l" && str[i] !== "r" && str[i] !== "f"){
        console.log ("The command string has an invalid input.");
      }
    } for(i = 0; i < str.length; i++){
      switch (str[i]) {
        case 'l':
          turnLeft();
          break;
        case 'r':
          turnRight();
          break;
        case 'f':
          moveForward();
          break;
      }
    } console.log(rover.travelLog);
  }

// call moveRover function with commands l, f, r
moveRover ("")
