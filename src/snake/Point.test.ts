import Point from "./Point";
import Snake from "./Snake";

describe("Point", function () {
  let redSnake = new Snake("red");

  it("has a working x position getter", function () {
    expect(redSnake.position.x).toBeDefined();
  });

  it("has a working y position getter", function () {
    expect(redSnake.position.y).toBeDefined();
  });
});
