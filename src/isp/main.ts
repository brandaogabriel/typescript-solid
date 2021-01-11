import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './entities/discount';
import { EnterpriseCustomer, IndividualCustomer } from './entities/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Gabriel', 'Brandao', '1111');
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '1234');
const order = new Order(
  shoppingCart,
  messaging,
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
