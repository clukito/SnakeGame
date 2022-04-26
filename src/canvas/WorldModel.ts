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
  // private snake: Snake;
  // private worldview: IWorldView | null;
  private width: number;
  private height: number;
  private allSnakes: Snake[];
  private allViews: IWorldView[];

  /**
   * initializes all the properties of a specific snake?
   * @param sn - takes in input of individual snake.
   */
  constructor() {
    this.allSnakes = [];
    this.allViews = [];
    // this.addSnake =

    this.width = 100;
    this.height = 100;
    // this.snake = sn;
    // this.worldview = null;
  }

  /**
   * moves all the snake in the world.
   * displays the worldview iff it's not null (null initially).
   * @param box - the number of box you want to update the snakes by
   */
  // public update(box: number) {
  //   this.snake.move(box);
  //   if (this.worldview != null) {
  //     this.worldview.display(this);
  //   }
  // }

  public update() {
    this.allSnakes.forEach((s) => s.move);
    this.allViews.forEach((v) => v.display(this));
  }

  public addSnake(s: Snake) {
    this.allSnakes.push(s);
  }

  public addView(v: IWorldView) {
    this.allViews.push(v);
  }

  /** a getter for the world's snake */
  public get allWorldSnakes() {
    return this.allSnakes;
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
  // set view(view: IWorldView) {
  //   this.worldview = view;
  // }
}
export default WorldModel;
