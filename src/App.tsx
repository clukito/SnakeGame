import "./styles.css";
import display from "./display";
import { useEffect } from "react";

import Snake from "./Snake";
import WorldModel from "./WorldModel";

export default function App() {
  useEffect(() => {
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey snake ppl");

    // Snake 1 - Green
    const snake1 = new Snake("Green");
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
    CelSnake.s.turnRight();
    CelSnake.s.move(3);
    display(
      snake1.color,
      "snake is facing",
      snake1.direction,
      "on position",
      snake1.position
    );
  }, []);

  return (
    <div className="App">
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}
