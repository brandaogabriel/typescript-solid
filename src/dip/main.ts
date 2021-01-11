import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { NoDiscount } from './entities/discount';
import { EnterpriseCustomer } from './entities/customer';
import { IMessaging } from './entities/protocols/messaging-protocol';

const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '1234');

export class MessagingMock implements IMessaging {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo mock');
  }
}
const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 19.9));
shoppingCart.addItem(new Product('Calça', 36.94));
shoppingCart.addItem(new Product('Bermuda', 64.98));

console.log(order.orderStatus);

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();

console.log(order.orderStatus);
