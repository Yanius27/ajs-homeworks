import Buyable from "./Buyable";

export default class ElectronicDevice implements Buyable {
  model: string;
  type: string;
  year: number;
  id: number;
  cost: number;
  quantity: number;
  constructor(model: string, year: number, id: number,cost: number) {
    this.model = model;
    this.type = 'device';
    this.year = year;
    this.id = id;
    this.cost = cost;
    this.quantity = 0;
  }
}