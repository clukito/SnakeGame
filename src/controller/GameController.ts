import WorldModel from "../canvas/WorldModel";
import Player from "../player/Player";

class GameController {
  private world: WorldModel;
  private p1: Player;
  private p2: Player;

  constructor(wm: WorldModel) {
    this.world = wm;
  }

  /**
   * allows user to set players
   * need at least 2 players to run the game
   * can be either AI or human player
   */
  set player1(p: Player) {
    this.p1 = p;
  }
  set player2(p: Player) {
    this.p2 = p;
  }

  /**
   * will actually run your game
   * do it in app.tsx file
   */
  run() {
    let lastTime = 0;
    const updateFrame = (milliseconds: number) => {
      // since page load
      this.p1.makeTurn(); // specific to a specific game controller
      this.p2.makeTurn();
      if (milliseconds - lastTime > 250) {
        this.world.update();
        lastTime += 250;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
}

export default GameController;
