import Buyable from "./Buyable";

export default class ElectronicDevice implements Buyable {
  constructor(public model: string, public type = 'device', public year: number, public id: number, public cost: number, public quantity = 0) {
  }
}