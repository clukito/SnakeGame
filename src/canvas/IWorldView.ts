import WorldModel from "./WorldModel";

/**
 * implement a display method. NOT the display function
 * any class that implements Iworldview must have a display method
 */
interface IWorldView {
  display: (w: WorldModel) => void;
}

export default IWorldView;
