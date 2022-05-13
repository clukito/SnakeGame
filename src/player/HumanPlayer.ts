import Player from "./Player";
import SnakeController from "../controller/SnakeController";
import IInputHandler from "../controller/IInputHandler";

/**
 * implemets Player abstract class
 * needs a makeTurn method
 */
class HumanPlayer extends Player {
  private handler: IInputHandler;

  constructor(sc: SnakeController, handler: IInputHandler) {
    super(sc);
    this.handler = handler;
  }

  /** connects handler and controller */
  makeTurn() {
    if (this.handler.madeLeftMove()) {
      this.snakeController.turnSnakeLeft();
      this.handler.resetLeftMove();
    }
    if (this.handler.madeRightMove()) {
      this.snakeController.turnSnakeRight();
      this.handler.resetRightMove();
    }
  }
}

export default HumanPlayer;
