import SnakeController from "./SnakeController";

abstract class Player {
  protected snakeController: SnakeController;

  constructor(sc: SnakeController) {
    this.snakeController = sc;
  }

  abstract makeTurn(): void;
}
export default Player;
