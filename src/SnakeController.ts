import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";

class SnakeController {
  private slitherer: Snake;
  private snakeWorld: WorldModel;

  constructor(slitherer: Snake, snakeWorld: WorldModel) {
    this.snakeWorld = snakeWorld;
    this.slitherer = slitherer;
  }

  turnSnakeLeft() {
    this.slitherer.turnLeft();
  }

  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  public get snakePosition(): Point {
    return this.slitherer.position;
  }

  public get snakeDirection() {
    return this.slitherer.direction;
  }

  public get worldWidth() {
    return this.snakeWorld.worldWidth;
  }

  public get worldHeight() {
    return this.snakeWorld.worldHeight;
  }
}
export default SnakeController;
