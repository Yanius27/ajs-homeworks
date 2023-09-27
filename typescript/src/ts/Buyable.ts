export default interface Buyable {
  title?: string,
  year: number,
  country?: string,
  tagline?: string,
  genre?: string[],
  duration?: string,
  model?: string,
  type: string,
  id: number,
  cost: number,
  quantity: number,
}