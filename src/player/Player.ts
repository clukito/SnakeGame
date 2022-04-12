import SnakeController from "../controller/SnakeController";

/**
 * contains one or more pure virtual member functions.
 * a base class where derived classes provide the implementations of the methods.
 * the players can only turn his/her won snake. cant control the other snakes in the world
 * doesnt have a direct access to the snake class
 */
abstract class Player {
  protected snakeController: SnakeController;

  /**
   * all the methods are defined in the snakeController class
   * players ga sembarang punya method
   * @param sc
   */
  constructor(sc: SnakeController) {
    this.snakeController = sc;
  }

  /**
   * all players can make a turn, but no specific instruction to "how"
   * this is because all players turn differently. forces all the players to have a turn method
   * look at avoidwalls player class.
   * A class extending the Player abstract base class must implement an abstract makeTurn method that calls the methods of a SnakeController,
   * making a Snake turn (or not) under certain conditions.
   */
  abstract makeTurn(): void;
}
export default Player;
