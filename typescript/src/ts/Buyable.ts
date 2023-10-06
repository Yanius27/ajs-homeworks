export default interface Buyable {
  year: number,
  type: string,
  id: number,
  cost: number,
  quantity: number,
  title?: string,
  country?: string,
  tagline?: string,
  genre?: string[],
  duration?: string,
  model?: string,
}