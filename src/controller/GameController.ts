import WorldModel from "../canvas/WorldModel";
import Player from "../player/Player";

class GameController {
  private world: WorldModel;
  private p1: Player;
  private p2: Player;

  constructor(wm: WorldModel) {
    this.world = wm;
  }

  set player1(p: Player) {
    this.p1 = p;
  }
  set player2(p: Player) {
    this.p2 = p;
  }

  run() {
    let lastTime = 0;
    // function updateFrame(){
    //   requestAnimationFrame(updateFrame)
    // }
    const updateFrame = (milliseconds: number) => {
      // since page load
      this.p1.makeTurn(); // specific to a specific game controller
      this.p2.makeTurn();
      if (milliseconds - lastTime > 250) {
        this.world.update(1);
        lastTime += 250;
      }

      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
}

export default GameController;
