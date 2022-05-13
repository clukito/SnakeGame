/**
 * immutable 2D Point class
 * represents the position (coordinate system) of the snake
 */
class Point {
  private xcoord: number;
  private ycoord: number;

  /**
   * composition - this.currentPosition = new Point(0, 0)
   *    - created inside the snake class definition
   *    - will be useless without the snake class
   * @param x - x coordinate
   * @param y - y coordinate
   */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }

  /**
   * to compare if 2 (x,y)s are the same
   * we need this because otherwise we are comparing memory locations, instead of coordinate
   * @param p - (x,y)
   */
  equals(p: Point) {
    return this.x === p.x && this.y === p.y;
  }

  /** a getter for x */
  public get x(): number {
    return this.xcoord;
  }

  /** a getter for y */
  public get y(): number {
    return this.ycoord;
  }

  /**
   * @returns the string representation of the point (x,y)
   * to convert the objects into string
   * otherwise it would appear as [object][object]
   */
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
}
export default Point;
