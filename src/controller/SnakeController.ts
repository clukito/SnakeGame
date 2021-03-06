import Snake from "../snake/Snake";
import WorldModel from "../canvas/WorldModel";
import Point from "../snake/Point";

/**
 * determines what a player can or cant do
 *    players cant tell the snake to move (to speed up)
 *    can only change the snake's directions
 * what a player (AI or human) uses to control its snake
 * or get info about its worldmodel
 * contains the lOCATION of your snake inside the world in respect to other snakes
 */
class SnakeController {
  private slitherer: Snake;
  private snakeWorld: WorldModel;

  constructor(aSlitherer: Snake, aSnakeWorld: WorldModel) {
    this.slitherer = aSlitherer;
    this.snakeWorld = aSnakeWorld;
  }

  /** uses turn methods from the snake class, but affecting only on slitherer (a specific snake) */
  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  /** gets a specific snake's position - slitherer from snake class */
  public get snakePosition(): Point {
    return this.slitherer.position;
  }

  public get snakeDirection() {
    return this.slitherer.direction;
  }

  /** gets information about the worldmodel */
  public get worldWidth() {
    return this.snakeWorld.worldWidth;
  }

  public get worldHeight() {
    return this.snakeWorld.worldHeight;
  }
}
export default SnakeController;
