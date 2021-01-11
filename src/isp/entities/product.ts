import { CartItem } from './protocols/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
