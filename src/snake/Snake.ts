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
  private currentParts: Point[];
  private currentDirection: number;
  public color: string;

  /**
   * Create a snake
   * (0,0) is top left corner
   * snake's initial direction is facing down
   * @param snakeColor
   * @param startPosition - specify where you want to start (initial head position)
   * @param size - how long you want to start your snake at - 1 is head only
   */

  constructor(snakeColor: string, startPosition: Point, size: number) {
    this.currentParts = [startPosition];
    for (let i = 1; i < size; i++) {
      // snake's body + head
      this.currentParts.push(new Point(startPosition.x, startPosition.y + i));
    }
    this.currentDirection = 270;
    this.color = snakeColor;
  }

  /**
   * moves the snake 1 box at a time
   * right = 0, front = 90, left = 180, down = 270
   */
  public move(box: number = 1) {
    // start with the body first so that the [0] will have a replacement after
    // the following body part will replace the position of the ones before it
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }

    if (this.currentDirection === 0) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x + box,
        this.currentParts[0].y
      );
    } else if (this.currentDirection === 90) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y - box // because top left is 0,0
      );
    } else if (this.currentDirection === 180) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x - box,
        this.currentParts[0].y
      );
    } else if (this.currentDirection === 270) {
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        this.currentParts[0].y + box
      );
    }
  }

  /** turns the snake to the left */
  turnLeft() {
    if (this.currentDirection === 270) {
      this.currentDirection = (360 + (this.currentDirection - 90)) % 360;
    } else {
      this.currentDirection = (this.currentDirection + 90) % 360;
    }
  }

  /** turns the snake to the right */
  turnRight() {
    if (this.currentDirection === 270) {
      this.currentDirection = (this.currentDirection + 90) % 360;
    } else {
      this.currentDirection = (360 + (this.currentDirection - 90)) % 360;
    }
  }

  /** to see if the snake collided with self/others */
  didCollide(s: Snake) {
    if (s === this) {
      // is it you?
      // if head = any part of your body - head
      this.currentParts.slice(1).some((x) => this.currentParts[0].equals(x));
    } else {
      // if it's other snake
      // if head = any part of that snake
      s.currentParts.some((x) => this.currentParts[0].equals(x));
    }
  }

  /** a getter for private propery of currentPosition
   * returns the position of the head
   * user 'cant' change the position of the user's snake */
  public get position() {
    return this.currentParts[0];
  }

  /** a getter for private propery of currentDirection */
  public get direction() {
    return myMap.get(this.currentDirection);
  }
}

export default Snake;
