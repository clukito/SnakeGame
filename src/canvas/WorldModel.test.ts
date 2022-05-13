import Snake from "../snake/Snake";
import Point from "../snake/Point";
import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";

describe("WorldModel", function () {
  let redSnake = new Snake("red", new Point(20, 20), 1);
  let greenSnake = new Snake("green", new Point(10, 10), 1);
  let blueSnake = new Snake("blue", new Point(20, 30), 1);
  let earth = new WorldModel();

  it("has a working update method", function () {
    earth.addSnake(redSnake);
    earth.addSnake(greenSnake);
    earth.addSnake(blueSnake);

    earth.update();
    expect(earth.update).toBeDefined();
    expect(redSnake.position.toString()).toStrictEqual("(20,21)");
  });

  it("has a working addSnake method", function () {
    earth.addSnake(redSnake);
    earth.addSnake(greenSnake);
    earth.addSnake(blueSnake);

    expect(earth.addSnake).toBeDefined();
    expect(earth.worldSnakes).toBeDefined();
  });

  it("has a working addView method", function () {
    expect(earth.addView).toBeDefined();
    let view1 = new CanvasWorldView(2);
    earth.addView(view1);
  });

  it("has a working world snake getter", function () {
    expect(earth.worldSnakes).toBeDefined();
  });

  it("has a working worldWidth getter", function () {
    expect(earth.worldWidth).toBeDefined();
    expect(earth.worldWidth).toBe(100);
  });

  it("has a working worldHeight getter", function () {
    expect(earth.worldHeight).toBeDefined();
    expect(earth.worldHeight).toBe(100);
  });
});
