// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  public color: string;

  constructor(snakeColor: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = snakeColor;
  }

  move(square: number) {
    // if facing forward
    if (this.currentDirection === 1) {
      this.currentPosition = this.currentPosition + square;
    }
    // if facing backward
    else {
      this.currentPosition = this.currentPosition - square;
    }
  }

  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = this.currentDirection - 2;
    }
    // if facing backward
    else {
      this.currentDirection = this.currentDirection + 2;
    }
  }

  public get position(): number {
    return this.currentPosition;
  }

  public get direction() {
    return this.currentDirection === 1 ? "forward" : "backward";
  }
}

export default Snake;
