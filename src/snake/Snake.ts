import Point from "./Point";

/** maps the direction (num) into a stirng */
const myMap = new Map<number, string>([
  [0, "right"],
  [90, "up"],
  [180, "left"],
  [270, "down"]
]);

/**
 * a class representing the snake
 * each snake in the worldmodel will have this property
 */
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  public color: string;

  /**
   * Create a snake
   * snake's initial position is (20,20)
   * (0,0) is top left corner
   * snake's initial direction is facing down
   * @param snakeColor - the color of the snake (universal)
   */
  constructor(snakeColor: string) {
    this.currentPosition = new Point(10, 10); // composition
    this.currentDirection = 270;
    this.color = snakeColor;
  }

  /**
   * moves the snake 1 box at a time
   * right = 0, front = 90, left = 180, down = 270
   * top left is (0,0)
   */
  public move(box: number = 1) {
    if (this.currentDirection === 0) {
      this.currentPosition = new Point(
        this.currentPosition.x + box,
        this.currentPosition.y
      );
    } else if (this.currentDirection === 90) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - box // because top left is 0,0
      );
    } else if (this.currentDirection === 180) {
      this.currentPosition = new Point(
        this.currentPosition.x - box,
        this.currentPosition.y
      );
    } else if (this.currentDirection === 270) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + box // look at line 40
      );
    }
  }

  /** turns the snake to the left */
  turnLeft() {
    this.currentDirection = (this.currentDirection + 90) % 360;
  }

  /** turns the snake to the right */
  turnRight() {
    this.currentDirection = (this.currentDirection - 90) % 360;
  }

  /** a getter for private propery of currentPosition
   * user 'cant' change the position of the user's snake */
  public get position() {
    return this.currentPosition;
  }

  /** a getter for private propery of currentDirection */
  public get direction() {
    return myMap.get(this.currentDirection);
  }
}

export default Snake;
