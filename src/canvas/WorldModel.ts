import Snake from "../snake/Snake";
import IWorldView from "./IWorldView";

/**
 * class containg the all the snakes.
 * can update all the snake's properties at once
 * can update the canvas's height and width
 * an AGGREGATION of the snake class
 * initializes worldview as null
 */
class WorldModel {
  private snake: Snake;
  private width: number;
  private height: number;
  private worldview: IWorldView | null;

  /**
   * initializes all the properties of a specific snake?
   * @param sn - takes in input of individual snake.
   */
  constructor(sn: Snake) {
    this.snake = sn;
    this.width = 500;
    this.height = 500;
    this.worldview = null;
  }

  /**
   * moves all the snake in the world.
   * displays the worldview iff it's not null (null initially).
   * @param box - the number of box you want to update the snakes by
   */
  public update(box: number) {
    this.snake.move(box);
    console.log("hei");
    if (this.worldview != null) {
      this.worldview.display(this);
    }
  }

  /** a getter for the world's snake */
  public get worldsnake() {
    return this.snake;
  }

  /** a getter for the world's width */
  public get worldWidth() {
    return this.width;
  }

  /** a getter for the world's height */
  public get worldHeight() {
    return this.height;
  }

  /**
   * a setter for the view.
   * we want to set the view for the world to "view"
   * Iworldview makes sure that the worldmodel has a view
   * we can choose which view we want */
  set view(view: IWorldView) {
    this.worldview = view;
  }
}
export default WorldModel;
