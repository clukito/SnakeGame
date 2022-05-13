import Point from "./Point";
import Snake from "./Snake";

describe("Snake", function () {
  let redSnake = new Snake("red", new Point(20, 20), 1);

  it("has a working move method", function () {
    expect(redSnake.move).toBeDefined();
  });

  it("moves correctly", function () {
    let c1 = new Snake("red", new Point(20, 20), 2);
    let c2 = new Snake("blue", new Point(40, 40), 1);
    c1.move(10);
    c1.move(5);
    c2.move(4);
    c2.move(7);
    expect(c1.position.toString()).toBe("(20,35)");
    expect(c2.position.toString()).toBe("(40,51)");
  });

  it("has a working turn left method", function () {
    expect(redSnake.turnLeft).toBeDefined();
  });
  it("has a working turn right method", function () {
    expect(redSnake.turnRight).toBeDefined();
  });
  it("turns correctly", function () {
    let c1 = new Snake("red", new Point(20, 20), 2);
    let c2 = new Snake("blue", new Point(40, 40), 1);
    c1.turnLeft();
    c1.turnLeft();
    c1.turnLeft();
    c1.turnLeft();
    c1.turnRight();
    c1.turnRight();
    c2.turnRight();
    c2.turnRight();
    c2.turnRight();
    c2.turnRight();
    c2.turnLeft();
    expect(c1.direction).toBe("down");
    expect(c2.direction).toBe("left");
  });

  it("moves and turns correctly", function () {
    let c1 = new Snake("red", new Point(20, 20), 2);
    let c2 = new Snake("blue", new Point(40, 40), 1);
    c1.turnLeft();
    c1.move(2);
    c1.turnRight();
    c1.move(4);
    c1.turnLeft();
    c1.move(5);
    c1.turnRight();
    c1.move(1);
    c1.turnLeft();
    c1.move(1);
    c1.turnLeft();
    c1.move(2);
    c1.turnLeft();
    c1.move(2);

    c2.turnRight();
    c2.move(2);
    c2.turnLeft();
    c2.move(4);
    c2.turnRight();
    c2.move(5);
    c2.turnLeft();
    c2.move(1);
    c2.turnRight();
    c2.move(1);
    c2.turnRight();
    c2.move(2);
    c2.turnRight();
    c2.move(2);
    expect(c1.position.toString()).toBe("(10,17)");
    expect(c1.direction).toBe("left");
    expect(c2.position.toString()).toBe("(50,37)");
    expect(c2.direction).toBe("right");
  });

  it("has a working position getter", function () {
    expect(redSnake.position).toBeDefined();
  });

  it("has a working direction getter", function () {
    expect(redSnake.direction).toBeDefined();
  });

  it("carries a color parameter", function () {
    let snakeColor = "green";
    let c1 = new Snake(snakeColor, new Point(20, 20), 1);
    c1.move(3);
    expect(c1.color).toContain(snakeColor);
  });
});
