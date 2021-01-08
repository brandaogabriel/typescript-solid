type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'PENDING' | 'FINISHED';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'PENDING';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((ac, val) => ac + val.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'FINISHED';
    this.sendMessage('Seu pedido foi recebido.');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 19.9 });
shoppingCartLegacy.addItem({ name: 'Calça', price: 36.94 });
shoppingCartLegacy.addItem({ name: 'Bermuda', price: 64.98 });

console.log(shoppingCartLegacy.orderStatus);

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();

console.log(shoppingCartLegacy.orderStatus);
