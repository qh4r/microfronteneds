import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartView';

mountProducts(document.querySelector('#products-list'));
mountCart(document.querySelector('#cart-box'));

console.log('Container');


