import Snake from "./Snake";

describe("Snake", function () {
  it("has a working move method", function () {
    let redSnake = new Snake("red");
    expect(redSnake.move).toBeDefined();
  });

  it("moves correctly", function () {
    let c1 = new Snake("red");
    let c2 = new Snake("blue");
    c1.move(10);
    c1.move(5);
    c2.move(4);
    c2.move(7);
    expect(c1.position.toString()).toBe("(20,35)");
    expect(c2.position.toString()).toBe("(20,31)");
  });

  it("has a working turn left method", function () {
    let redSnake = new Snake("red");
    expect(redSnake.turnLeft).toBeDefined();
  });
  it("has a working turn right method", function () {
    let redSnake = new Snake("red");
    expect(redSnake.turnRight).toBeDefined();
  });
  it("turns correctly", function () {
    let c1 = new Snake("red");
    let c2 = new Snake("blue");
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
    expect(c1.direction).toBe("up");
    expect(c2.direction).toBe("right");
  });

  it("moves and turns correctly", function () {
    let c1 = new Snake("red");
    let c2 = new Snake("blue");
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
    expect(c1.position.toString()).toBe("(26,18)");
    expect(c1.direction).toBe("left");
    expect(c2.position.toString()).toBe("(14,23)");
    expect(c2.direction).toBe("right");
  });

  it("has a working position getter", function () {
    let redSnake = new Snake("red");
    expect(redSnake.position).toBeDefined();
  });

  it("has a working direction getter", function () {
    let redSnake = new Snake("red");
    expect(redSnake.direction).toBeDefined();
  });

  it("can be converted to a string with a color", function () {
    let carColor = "green";
    let c1 = new Snake(carColor);
    c1.move(3);
    expect(c1.color).toContain(carColor);
  });
  // it("title for next next test", function () {
  //   expect(2 + 2).not.toBe(3);
  // });
});
