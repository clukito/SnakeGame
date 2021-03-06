import AWP from "./AvoidWallsPlayer";
import Snake from "../snake/Snake";
import SnakeController from "../controller/SnakeController";
import WorldModel from "../canvas/WorldModel";
import Point from "../snake/Point";

describe("AWP", function () {
  let redSnake = new Snake("red", new Point(20, 20), 2);
  let earth = new WorldModel();
  let controller1 = new SnakeController(redSnake, earth);
  let celine = new AWP(controller1); // lower case!!

  it("has a working make turn method", function () {
    expect(celine.makeTurn).toBeDefined();
  });

  // check direction
  it("makeTurns correctly", function () {
    celine.makeTurn();
    celine.makeTurn();
    celine.makeTurn();
  });
});
