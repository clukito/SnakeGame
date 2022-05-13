import SnakeController from "./SnakeController";
import Snake from "../snake/Snake";
import Point from "../snake/Point";
import WorldModel from "../canvas/WorldModel";

describe("Snake Controller", function () {
  let redSnake = new Snake("red", new Point(20, 20), 1);
  let earth = new WorldModel();
  let controller1 = new SnakeController(redSnake, earth);

  it("has a working turnSnakeLeft method", function () {
    expect(controller1.turnSnakeLeft).toBeDefined();
  });

  it("has a working turnSnakeRight method", function () {
    expect(controller1.turnSnakeRight).toBeDefined();
  });

  it("has a working slith position getter", function () {
    expect(controller1.snakePosition).toBeDefined();
  });

  it("has a working slith direction getter", function () {
    expect(controller1.snakeDirection).toBeDefined();
  });

  // wrong
  it("has a working worldWidth getter", function () {
    expect(earth.worldWidth).toBeDefined();
  });

  it("has a working worldHeight getter", function () {
    expect(earth.worldHeight).toBeDefined();
  });
});
