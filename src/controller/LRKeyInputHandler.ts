import IInputHandler from "./IInputHandler";

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

  // made left move? return
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
