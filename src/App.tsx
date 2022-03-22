import "./styles.css";
import display from "./display";
import { useEffect } from "react";
import checkerboard from "./canvas/checkerboard.jpg";

import Snake from "./snake/Snake";
import WorldModel from "./canvas/WorldModel";
import CanvasWorldView from "./canvas/CanvasWorldView";

export default function App() {
  useEffect(() => {
    // Canvas
    const gameContext = document.getElementById("game").getContext("2d");
    gameContext.fillStyle = "black"; // replace red with desired color
    gameContext.fillRect(5, 10, 15, 20);
    gameContext.fillRect(5, 40, 15, 20);

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
    const snake1 = new Snake("Green");
    console.log(snake1.color);
    snake1.move(2);
    snake1.move();
    snake1.turnLeft();
    snake1.move(1);
    snake1.turnLeft();
    snake1.move(3);
    snake1.turnRight();
    snake1.move(2);
    snake1.move(1);

    display(
      snake1.color,
      "snake is facing",
      snake1.direction,
      "on position",
      snake1.position
    );

    // Snake 2 - Maroon
    const snake2 = new Snake("Maroon");
    snake2.turnRight();
    snake2.move(1);
    snake2.move(2);

    display(
      snake2.color,
      "snake is facing",
      snake2.direction,
      "on position",
      snake2.position
    );

    // WorldModel
    const CelSnake = new WorldModel(snake1);
    CelSnake.update(5);
    CelSnake.worldsnake.turnRight();
    CelSnake.worldsnake.move(3);
    display(
      snake1.color,
      "snake is facing",
      snake1.direction,
      "on position",
      snake1.position
    );

    const view1 = new CanvasWorldView(3);
    CelSnake.view = view1;
    CelSnake.update(50);
  }, []);

  return (
    <div className="App">
      <pre id="output">
        OUTPUT: <br />
      </pre>

      <canvas width="320" height="480" id="game" />
    </div>
  );
}
