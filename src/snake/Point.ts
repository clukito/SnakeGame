/**
 * represents the position (coordinate system) of the snake
 */
class Point {
  private xcoord: number;
  private ycoord: number;

  /**
   * composition - this.currentPosition = new Point(0, 0)
   * @param x - x coordinate
   * @param y - y coordinate
   */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  equals(p) {
    if (this.xcoord === p && this.ycoord === p) {
      // returns true
    }
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
