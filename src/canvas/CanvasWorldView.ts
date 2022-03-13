import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

/** the canvas for the world
 * implements Iworldview interface
 */
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  /**
   * const view1 = newCanvasWorldView(3)
   * @param scalingFactor - how much you want to scale the canvas by
   * context stores the reference to the new created canvas - displays it
   */
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  /** the display is modified according to the scaling factor */
  display(w: WorldModel): void {
    this.worldCanvas.height = w.worldHeight * this.scalingFactor;
    this.worldCanvas.width = w.worldWidth * this.scalingFactor;
    this.context.fillRect(5, 10, 15, 20);
  }
}

export default CanvasWorldView;
