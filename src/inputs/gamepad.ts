import { IGamepad } from '../interfaces';

export class Gamepad {
  private gamepad: IGamepad;

  constructor(gamepad: IGamepad) {
    this.gamepad = gamepad;
  }
}
