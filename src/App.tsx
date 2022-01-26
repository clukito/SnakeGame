import "./styles.css";
// import Snake from "./Snake.ts";
import display from "./display";
import { useEffect } from "react";

import Snake from "./Snake";

export default function App() {
  // Add Snake Tests with display below
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey snake ppl");

    //Snake facing forward
    const snake1 = new Snake();
    snake1.move(10);
    snake1.turn();
    snake1.move(20);
    snake1.turn();

    //Snake facing backward
    const snake2 = new Snake();
    snake2.turn();
    snake2.move(20);
    snake2.move(5);

    display(
      "Snake 1 is facing",
      snake1.direction,
      "on position",
      snake1.position
    );
    display(
      "Snake 2 is facing",
      snake2.direction,
      "on position",
      snake2.position
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
