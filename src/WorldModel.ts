import Snake from "./Snake";

// I have no idea what I am doing here

class WorldModel {
  private _update: number;
  private sn: Snake;

  constructor(update: number, s: Snake) {
    this._update = update;
    this.sn = s;
  }

  public update(steps): number {
    return this._update;
  }
}

export default WorldModel;
