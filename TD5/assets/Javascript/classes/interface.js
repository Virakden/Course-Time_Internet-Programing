class Game {
  //Properties
  playerName = null;
  dinosaur = null;
  score = 10;
  level = 1;
  constructor(ctx) {
    this.ctx = ctx;
  }

  //Methods
  start(playerName) {
    // Receive player name and save it.
    if (playerName) {
      this.playerName = playerName;
      console.log("Game is starting!!", this);
    } else {
      alert("Player name is required!!");
    }

    // Remove starting container from canvas
    let startingContainer = document.getElementById("starting-container");
    startingContainer.style.display = "none";
  }
  pause() {
    console.log("Pause the game!!!");
  }
}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let interface = new Game(ctx);

function startGame() {
    let playNameInput = document.getElementById("player_name");
    interface.start(playNameInput.value);

}
