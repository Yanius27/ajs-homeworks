import Buyable from './Buyable';

export default class Movie implements Buyable {
  title: string;
  type: string;
  year: number;
  country: string;
  tagline: string;
  genre: string[];
  duration: string;
  id: number;
  cost: number;
  quantity: number;
  constructor(title: string, year: number, country: string, tagline: string, genre: string[], duration: string, id: number, cost: number) {
    this.title = title;
    this.type = 'movie';
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.duration = duration;
    this.id = id;
    this.cost = cost;
    this.quantity = 0;
  }
}