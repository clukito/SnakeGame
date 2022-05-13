import WorldModel from "../canvas/WorldModel";
import GameController from "./GameController";

describe("GameController", function () {
  let earth = new WorldModel();
  const game1 = new GameController(earth);

  it("has a working run method", function () {
    expect(game1.run).toBeDefined();
  });
});
