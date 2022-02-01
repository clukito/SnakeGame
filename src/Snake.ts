import Point from "./Point";

const myMap = new Map<number, string>([
  [0, "right"],
  [90, "up"],
  [180, "left"],
  [270, "down"]
]);

let trial = myMap.get(0);
console.log(trial);

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
    this.currentDirection = 90; // default facing front
    this.color = snakeColor;
  }

  /**
   * moves the snake 1 box at a time
   */
  // right = 0, front = 90, left = 180, down = 270
  public move() {
    if (this.currentDirection === 0) {
      this.currentPosition = new Point(
        this.currentPosition.x + 1,
        this.currentPosition.y
      );
    } else if (this.currentDirection === 90) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + 1
      );
    } else if (this.currentDirection === 180) {
      this.currentPosition = new Point(
        this.currentPosition.x - 1,
        this.currentPosition.y
      );
    } else {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - 1
      );
    }
  }

  /**
   * turns the snake to the left
   */
  turnLeft() {
    if (this.currentDirection === 270) {
      this.currentDirection = 0;
    } else {
      this.currentDirection = this.currentDirection + 90;
    }
  }

  /**
   * turns the snake to the right
   */
  turnRight() {
    if (this.currentDirection === 0) {
      this.currentDirection = 270;
    } else {
      this.currentDirection = this.currentDirection - 90;
    }
  }

  public get position() {
    return this.currentPosition;
  }

  public get direction() {
    return myMap.get(this.currentDirection);
  }
}

export default Snake;
