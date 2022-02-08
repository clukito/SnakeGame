import Snake from "./Snake";

class WorldModel {
  private snake: Snake;

  constructor(sn: Snake) {
    this.snake = sn;
  }

  public update(steps: number) {
    this.snake.move(steps);
  }

  public get s() {
    return this.snake;
  }
}
export default WorldModel;
