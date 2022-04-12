import Player from "./Player";
import SnakeController from "../controller/SnakeController";
import IInputHandler from "../controller/IInputHandler";

class HumanPlayer extends Player {
  // private sc: SnakeController;
  private handler: IInputHandler;

  constructor(sc: SnakeController, handler: IInputHandler) {
    super(sc);
  }

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
