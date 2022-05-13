import WorldModel from "../canvas/WorldModel";
import GameController from "./GameController";
import LRKeyInputHander from "./LRKeyInputHandler";

describe("GameController", function () {
  let earth = new WorldModel();
  const game1 = new GameController(earth);
  let handler = new LRKeyInputHander();

  it("has a working madeLeftMove method", function () {
    expect(handler.madeLeftMove).toBeDefined();
    handler.madeLeftMove();
    expect(handler.wasLeftArrowPushed).toBe(false);
  });

  it("has a working resetLeftMove method", function () {
    expect(handler.resetLeftMove).toBeDefined();
    handler.resetLeftMove();
    expect(handler.wasLeftArrowPushed).toBe(false);
  });

});
