const rockSide = "rock";
const scissorsSide = "scissors";
const paperSide = "paper";

function start(mySide) {
  let compSide = "";
  let randomNum = Math.floor(Math.random() * 3 + 1);
  console.log(randomNum);
  //   pc side
  if (randomNum === 1) {
    compSide = "paper";
  } else if (randomNum === 2) {
    compSide = "scissors";
  } else {
    compSide = "rock";
  }
  //   validation
  if (
    (mySide === rockSide && compSide === "paper") ||
    (mySide === paperSide && compSide === "scissors") ||
    (mySide === scissorsSide && compSide === "rock")
  ) {
    console.log("lose");
  } else if (
    (mySide === rockSide && compSide === "scissors") ||
    (mySide === paperSide && compSide === "rock") ||
    (mySide === scissorsSide && compSide === "paper")
  ) {
    console.log("win");
  } else if (mySide === compSide) {
    console.log("tie");
  }
}
start(rockSide);
