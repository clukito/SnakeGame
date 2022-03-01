import Snake from "./Snake";
import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn() {
    // left side
    if (
      this.snakeController.snakeDirection === "left" &&
      this.snakeController.snakePosition.x === 0 &&
      this.snakeController.snakePosition.y <
        this.snakeController.worldHeight / 2
    ) {
      this.snakeController.turnSnakeLeft();
    } else if (
      this.snakeController.snakeDirection === "left" &&
      this.snakeController.snakePosition.x === 0 &&
      this.snakeController.snakePosition.y >=
        this.snakeController.worldHeight / 2
    ) {
      this.snakeController.turnSnakeRight();
    }
    // bottom
    else if (
      this.snakeController.snakeDirection === "down" &&
      this.snakeController.snakePosition.x <
        this.snakeController.worldWidth / 2 &&
      this.snakeController.snakePosition.y === this.snakeController.worldHeight
    ) {
      this.snakeController.turnSnakeLeft();
    } else if (
      this.snakeController.snakeDirection === "down" &&
      this.snakeController.snakePosition.x >=
        this.snakeController.worldWidth / 2 &&
      this.snakeController.snakePosition.y === this.snakeController.worldHeight
    ) {
      this.snakeController.turnSnakeRight();
    }

    // right
    else if (
      this.snakeController.snakeDirection === "right" &&
      this.snakeController.snakePosition.x ===
        this.snakeController.worldWidth &&
      this.snakeController.snakePosition.y <
        this.snakeController.worldHeight / 2
    ) {
      this.snakeController.turnSnakeRight();
    } else if (
      this.snakeController.snakeDirection === "left" &&
      this.snakeController.snakePosition.x ===
        this.snakeController.worldWidth &&
      this.snakeController.snakePosition.y >=
        this.snakeController.worldHeight / 2
    ) {
      this.snakeController.turnSnakeLeft();
    }
    // top
    else if (
      this.snakeController.snakeDirection === "up" &&
      this.snakeController.snakePosition.x <
        this.snakeController.worldHeight / 2 &&
      this.snakeController.snakePosition.y === 0
    ) {
      this.snakeController.turnSnakeRight();
    } else {
      this.snakeController.turnSnakeLeft();
    }
  }
}
export default AvoidWallsPlayer;
