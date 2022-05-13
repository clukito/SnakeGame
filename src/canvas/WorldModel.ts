import Snake from "../snake/Snake";
import IWorldView from "./IWorldView";

/**
 * class containg the all the snakes.
 * can update all the snake's properties at once
 * can update the canvas's height and width
 * an AGGREGATION of the snake class
 *    - OUTSIDE of the snake class
 * initializes worldview as null
 */
class WorldModel {
  private width: number;
  private height: number;
  private allSnakes: Snake[];
  private allViews: IWorldView[];

  /**
   * the snake and view initially have empty arrays
   */
  constructor() {
    this.allSnakes = [];
    this.allViews = [];
    this.width = 100;
    this.height = 100;
  }

  /**
   * moves all the snake in the world.
   * displays the worldview iff it's not null (null initially).
   * has empty array of dead snake.
   * if did collide AND not on the array ald, append to deadSnakes[]
   * then remove it from the allSnake[]
   */
  public update() {
    this.allSnakes.forEach((s) => s.move());
    this.allViews.forEach((v) => v.display(this));
    const deadSnakes: Snake[] = [];
    this.allSnakes.forEach((snake) => {
      if (
        this.allSnakes.some((othersnake) => snake.didCollide(othersnake)) &&
        deadSnakes.includes(snake)
      ) {
        deadSnakes.push(snake);
      }
    });
    // you do it after the for each so you dont skip the index (think about 222. check if other index = [0], remove [1], but then shifts to next one (skipped one))
    deadSnakes.forEach((deadSnake) =>
      this.allSnakes.splice(this.allSnakes.indexOf(deadSnake), 1)
    );
  }

  /** appends snake into the snake array in the worldmodel */
  public addSnake(s: Snake) {
    this.allSnakes.push(s);
  }

  /** appends view into the allViews[] */
  public addView(v: IWorldView) {
    this.allViews.push(v);
  }

  /** a getter for the all world's snake */
  public get worldSnakes(): Snake[] {
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
