import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { OrderStatus } from '../entities/protocols/order-status';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './protocols/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'PENDING';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'FINISHED';
    this.messaging.sendMessage('Seu pedido foi recebido.');
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
