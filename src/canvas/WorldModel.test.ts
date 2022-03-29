import Snake from "../snake/Snake";
import WorldModel from "./WorldModel";

describe("Snake Controller", function () {
  let redSnake = new Snake("red");
  let earth = new WorldModel(redSnake);

  it("has a working update method", function () {
    expect(earth.update).toBeDefined();
  });

  it("has a working world snake getter", function () {
    expect(earth.worldsnake).toBeDefined();
  });

  it("has a working worldWidth getter", function () {
    expect(earth.worldWidth).toBeDefined();
  });

  it("has a working worldHeight getter", function () {
    expect(earth.worldHeight).toBeDefined();
  });
});
