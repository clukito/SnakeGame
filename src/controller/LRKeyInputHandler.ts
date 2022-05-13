import IInputHandler from "./IInputHandler";

/**
 * implements interface - needs madeLeftMove, resetLeftMove, etc
 * event listener -> https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#Result
 */
class LRKeyInputHander implements IInputHandler {
  public wasLeftArrowPushed: boolean;
  public wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", ({ key }) => {
      if (key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      }
      if (key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }

  /**
   * returns the current state of booleans
   * "hello, snake madeLeftMove? true!"
   */
  madeLeftMove() {
    return this.wasLeftArrowPushed;
  }
  madeRightMove() {
    return this.wasRightArrowPushed;
  }

  resetLeftMove() {
    this.wasLeftArrowPushed = false;
  }
  resetRightMove() {
    this.wasRightArrowPushed = false;
  }
}
export default LRKeyInputHander;
