import Buyable from './Buyable';

export default class Cart {
    _items: Buyable[] = [];

    add(item: Buyable): void {
      let index;
      if(item.type === 'device') {
        index = this._items.findIndex((el: Buyable) => el.model === item.model);
      } else {
        index = this._items.findIndex((el: Buyable) => el.title === item.title);
      }
      
      if(item.type === 'device' && index !== -1) {
        this._items[index].quantity += 1;
        this._items[index].cost += item.cost;
      } else if(item.type === 'device' && index == -1) {
        item.quantity = 1;
        this._items.push(item);
      } else if(item.type === 'movie' && index == -1) {
        item.quantity = 1;
        this._items.push(item);
      }
    }

    totalCost(): number {
      return this._items.reduce((acc: number, cur: Buyable) => acc + cur.cost, 0);
    }

    totalCostWithDiscount(discount: number): number {
      const total = this.totalCost();
      return total - total * (discount / 100);
    }

    deleteItem(id: number): void {
      const index = this._items.findIndex((elem: Buyable) => elem.id === id);
      if(index === -1) {
        throw new Error('Данного элемента нет в корзине');
      }
      if(this._items[index].type === 'movie' || this._items[index].quantity < 2) {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
      } else {
        this._items[index].cost /= this._items[index].quantity;
        this._items[index].quantity -= 1;
        this._items[index].cost *= this._items[index].quantity;
      } 
      
    }

    get items(): Buyable[] {
      return [...this._items]; 
    }
}