import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

/** the canvas for the world
 * implements Iworldview interface -- needs a display method
 */
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  /**
   * @param scalingFactor - how much you want to scale the canvas by
   * context stores the reference to the new created canvas - displays it
   */
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    // ! in the end indicates that it wont be null
    this.context = this.worldCanvas.getContext("2d")!;
    // appends the canvas to the body of the page
    // this.worldcanvas stores the reference to the newly created canvas
    document.body.appendChild(this.worldCanvas);
  }

  /**
   * @param w - width/height/allSnake[]/allView[]
   * the display is modified according to the scaling factor
   * draw each part of each snake - 2 for loops
   */
  display(w: WorldModel): void {
    this.worldCanvas.height = w.worldHeight * this.scalingFactor;
    this.worldCanvas.width = w.worldWidth * this.scalingFactor;

    w.worldSnakes.forEach((snake) =>
      snake.currentParts.forEach((part) =>
        this.context.fillRect(
          part.x * this.scalingFactor,
          part.y * this.scalingFactor,
          this.scalingFactor,
          this.scalingFactor
        )
      )
    );
  }
}

export default CanvasWorldView;
