import "./styles.css";
import display from "./display";
import { useEffect } from "react";
// import checkerboard from "./canvas/checkerboard.jpg";

import Snake from "./snake/Snake";
import WorldModel from "./canvas/WorldModel";
import CanvasWorldView from "./canvas/CanvasWorldView";
import HumanPlayer from "./player/HumanPlayer";
import AvoidWallsPlayer from "./player/AvoidWallsPlayer";
import SnakeController from "./controller/SnakeController";
import LRKeyInputHander from "./controller/LRKeyInputHandler";
import GameController from "./controller/GameController";

export default function App() {
  useEffect(() => {
    // Canvas
    // const gameContext = document.getElementById("game").getContext("2d");
    // gameContext.fillStyle = "black"; // replace red with desired color
    // gameContext.fillRect(5, 10, 15, 20);
    // gameContext.fillRect(5, 40, 15, 20);

    // const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
    // const ctx = gameCanvas.getContext("2d");
    // const img = new Image(256, 256);
    // img.src = checkerboard;
    // img.onload = () => {
    //   ctx?.drawImage(img, 0, 0, gameCanvas.width, gameCanvas.height);
    // };

    // Snake
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey snake ppl");

    // Snake 1 - Green
    // const snake1 = new Snake("Green");
    // snake1.move(2);
    // snake1.move();
    // snake1.turnLeft();
    // snake1.move(1);
    // snake1.turnLeft();
    // snake1.move(3);
    // snake1.turnRight();
    // snake1.move(2);
    // snake1.move(1);

    // display(
    //   snake1.color,
    //   "snake is facing",
    //   snake1.direction,
    //   "on position",
    //   snake1.position
    // );

    // Snake 2 - Maroon
    // const snake2 = new Snake("Maroon");
    // snake2.turnRight();
    // snake2.move(1);
    // snake2.move(2);

    // display(
    //   snake2.color,
    //   "snake is facing",
    //   snake2.direction,
    //   "on position",
    //   snake2.position
    // );

    // testing
    const snake1 = new Snake("Green");
    const earth = new WorldModel(snake1);
    const control1 = new SnakeController(snake1, earth);
    const view1 = new CanvasWorldView(2);
    const aI1 = new AvoidWallsPlayer(control1);
    const aI2 = new AvoidWallsPlayer(control1);
    const human1 = new HumanPlayer(control1, new LRKeyInputHander());
    const human2 = new HumanPlayer(control1, new LRKeyInputHander());
    const game1 = new GameController(earth);

    game1.player1 = aI1;
    game1.player2 = aI2;
    earth.view = view1;
    earth.update(50);

    display(
      snake1.color,
      "snake is facing",
      snake1.direction,
      "on position",
      snake1.position
    );

    // game1.run();
  }, []);

  return (
    <div className="App">
      <pre id="output">
        OUTPUT: <br />
      </pre>

      {/* <canvas width="320" height="480" id="game" /> */}
    </div>
  );
}
