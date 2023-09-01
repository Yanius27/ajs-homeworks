import { Daemon } from "./Daemon";

export class Magican extends Daemon {
  constructor(name, type = 'Magican') {
    super(name, type);
  }
};