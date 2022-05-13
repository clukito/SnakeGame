import Player from "./Player";

/**
 * extends Player class - hv to hv a make turn method
 * no constructor bc it's useless - extends player's constuctor */
class AvoidWallsPlayer extends Player {
  /**
   * abstract method from player class
   * turns the snake automatically so it doesnt crash to a wall
   */
  makeTurn() {
    // left side
    if (
      this.snakeController.snakeDirection === "left" &&
      this.snakeController.snakePosition.x === 2 &&
      this.snakeController.snakePosition.y <
        (this.snakeController.worldHeight - 1) / 2
    ) {
      this.snakeController.turnSnakeLeft();
    } else if (
      this.snakeController.snakeDirection === "left" &&
      this.snakeController.snakePosition.x === 2 &&
      this.snakeController.snakePosition.y >=
        (this.snakeController.worldHeight - 1) / 2
    ) {
      this.snakeController.turnSnakeRight();
    }
    // bottom
    else if (
      this.snakeController.snakeDirection === "down" &&
      this.snakeController.snakePosition.x <
        (this.snakeController.worldWidth - 1) / 2 &&
      this.snakeController.snakePosition.y ===
        this.snakeController.worldHeight - 2
    ) {
      this.snakeController.turnSnakeLeft();
    } else if (
      this.snakeController.snakeDirection === "down" &&
      this.snakeController.snakePosition.y ===
        this.snakeController.worldHeight - 2
    ) {
      this.snakeController.turnSnakeRight();
    }
    // right
    else if (
      this.snakeController.snakeDirection === "right" &&
      this.snakeController.snakePosition.x ===
        this.snakeController.worldWidth - 2 &&
      this.snakeController.snakePosition.y <
        (this.snakeController.worldHeight - 1) / 2
    ) {
      this.snakeController.turnSnakeRight();
    } else if (
      this.snakeController.snakeDirection === "right" &&
      this.snakeController.snakePosition.x ===
        this.snakeController.worldWidth - 2 &&
      this.snakeController.snakePosition.y >=
        (this.snakeController.worldHeight - 1) / 2
    ) {
      this.snakeController.turnSnakeLeft();
    }
    // top
    else if (
      this.snakeController.snakeDirection === "up" &&
      this.snakeController.snakePosition.x <
        (this.snakeController.worldHeight - 1) / 2 &&
      this.snakeController.snakePosition.y === 2
    ) {
      this.snakeController.turnSnakeRight();
    } else if (
      this.snakeController.snakeDirection === "up" &&
      this.snakeController.snakePosition.x >=
        (this.snakeController.worldHeight - 1) / 2 &&
      this.snakeController.snakePosition.y === 2
    ) {
      this.snakeController.turnSnakeLeft();
    }
  }
}
export default AvoidWallsPlayer;
