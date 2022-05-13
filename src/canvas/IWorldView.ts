import WorldModel from "./WorldModel";

/**
 * an interface - defines what the class has, but not HOW to do it
 * implement a display method. NOT the display function
 * any class that implements Iworldview must have a display method
 */
interface IWorldView {
  display: (w: WorldModel) => void;
}

export default IWorldView;
