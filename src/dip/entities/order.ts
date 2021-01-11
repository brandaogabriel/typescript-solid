import { OrderStatus } from '../entities/protocols/order-status';
import { CustomerOrder } from './protocols/customer-protocol';
import { IShoppingCart } from './protocols/shopping-cart-protocol';
import { IMessaging } from './protocols/messaging-protocol';
import { IPersistency } from './protocols/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'PENDING';

  constructor(
    private readonly cart: IShoppingCart,
    private readonly messaging: IMessaging,
    private readonly persistency: IPersistency,
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
