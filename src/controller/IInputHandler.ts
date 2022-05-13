/**
 * madeLeftMove returns true when player inputted a left move (pressed a key/swipped/etc)
 * resetLeftMove turns the snake left, then resets it back to false
 */
interface IInputHandler {
  madeLeftMove(): boolean;
  madeRightMove(): boolean;

  resetLeftMove(): void;
  resetRightMove(): void;
}

export default IInputHandler;
