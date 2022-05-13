import WorldModel from "./WorldModel";
import CanvasWorldView from "./CanvasWorldView";

describe("CanvasWorldView", function () {
  let earth = new WorldModel();
  let view1 = new CanvasWorldView(2);
  earth.addView(view1);

  it("has a working display method", function () {
    view1.display(earth);
    expect(earth.worldHeight).toBe(100);
    // idky
  });
});
