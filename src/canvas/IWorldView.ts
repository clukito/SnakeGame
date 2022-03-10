import WorldModel from "./WorldModel";

interface IWorldView {
  display: (w: WorldModel) => void;
}

export default IWorldView;
