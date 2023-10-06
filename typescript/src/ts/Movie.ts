import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(public title: string, public type = 'movie', public year: number, public country: string, public tagline: string, public genre: string[], public duration: string, public id: number, public cost: number, public quantity = 0) {
  }
}