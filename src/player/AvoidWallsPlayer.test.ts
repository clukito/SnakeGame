import AWP from "./AvoidWallsPlayer";
import Snake from "../snake/Snake";
import SnakeController from "../controller/SnakeController";
import WorldModel from "../canvas/WorldModel";

describe("AWP", function () {
  let redSnake = new Snake("red");
  let earth = new WorldModel(redSnake);
  let controller1 = new SnakeController(redSnake, earth);
  let Celine = new AWP(controller1); // lower case!!

  it("has a working make turn method", function () {
    expect(Celine.makeTurn).toBeDefined();
  });

  // check direction
  it("makeTurns correctly", function () {
    Celine.makeTurn();
    Celine.makeTurn();
    Celine.makeTurn();
  });
});
