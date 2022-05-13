import Point from "./Point";
import Snake from "./Snake";

describe("Point", function () {
  let redSnake = new Snake("red", new Point(20, 20), 1);

  it("has a working equals method", function () {
    expect(new Point(5, 2).equals(new Point(5, 2))).toBeDefined();
    let x = new Point(10, 20);
    let y = new Point(10, 20);
    let z = new Point(10, 30);
    expect(x.equals(y)).toBe(true);
    expect(x.equals(z)).toBe(false);
  });

  it("has a working x position getter", function () {
    expect(redSnake.position.x).toBeDefined();
  });

  it("has a working y position getter", function () {
    expect(redSnake.position.y).toBeDefined();
  });
});
