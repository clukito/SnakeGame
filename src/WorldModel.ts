import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  private width: number;
  private height: number;

  constructor(sn: Snake) {
    this.snake = sn;
    this.width = 500;
    this.height = 500;
  }

  public update(steps: number) {
    this.snake.move(steps);
  }

  public get s() {
    return this.snake;
  }

  public get worldWidth() {
    return this.width;
  }

  public get worldHeight() {
    return this.height;
  }
}
export default WorldModel;
