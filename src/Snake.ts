import Point from "./Point";

const myMap = new Map<number, string>([
  [0, "right"],
  [90, "up"],
  [180, "left"],
  [270, "down"]
]);

/** Main class representing the snake */
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  public color: string;

  /**
   * Create a snake
   * @param snakeColor - the color of the snake
   */
  constructor(snakeColor: string) {
    this.currentPosition = new Point(0, 0); // composition
    this.currentDirection = 90;
    this.color = snakeColor;
  }

  /**
   * moves the snake 1 box at a time
   */
  // right = 0, front = 90, left = 180, down = 270
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
    } else {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + box // look at line 39
      );
    }
  }

  /**
   * turns the snake to the left
   */
  turnLeft() {
    this.currentDirection = (this.currentDirection + 90) % 360;
  }

  /**
   * turns the snake to the right
   */
  // maybe do modulus ??
  turnRight() {
    this.currentDirection = (this.currentDirection - 90) % 360;
  }

  public get position() {
    return this.currentPosition;
  }

  public get direction() {
    return myMap.get(this.currentDirection);
  }
}

export default Snake;
