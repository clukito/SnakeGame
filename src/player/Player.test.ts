import Human from "./HumanPlayer";
import Snake from "../snake/Snake";
import SnakeController from "../controller/SnakeController";
import WorldModel from "../canvas/WorldModel";
import Point from "../snake/Point";
import LRKeyInputHander from "../controller/LRKeyInputHandler";

describe("Player", function () {
  let redSnake = new Snake("red", new Point(20, 20), 2);
  let earth = new WorldModel();
  let controller1 = new SnakeController(redSnake, earth);
  let celine = new Human(controller1, new LRKeyInputHander());

  it("has a working make turn method", function () {
    expect(celine.makeTurn).toBeDefined();
  });
});
