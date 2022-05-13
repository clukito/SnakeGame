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
import Point from "./snake/Point";

export default function App() {
  useEffect(() => {
    // Snake
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey snake ppl");

    // testing
    const snake1 = new Snake("Green", new Point(20, 20), 1);
    const snake2 = new Snake("Red", new Point(10, 10), 1);
    const earth = new WorldModel();
    const control1 = new SnakeController(snake1, earth);
    const control2 = new SnakeController(snake2, earth);
    const view1 = new CanvasWorldView(2);
    const aI1 = new AvoidWallsPlayer(control1);
    const aI2 = new AvoidWallsPlayer(control2);
    const human1 = new HumanPlayer(control1, new LRKeyInputHander());
    const human2 = new HumanPlayer(control2, new LRKeyInputHander());
    const game1 = new GameController(earth);

    game1.player1 = human1;
    game1.player2 = aI2;
    earth.addSnake(snake1);
    earth.addSnake(snake2);
    earth.addView(view1);
    earth.update();

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
