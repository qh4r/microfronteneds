import faker from 'faker';

const cartText = `<div>You got ${faker.random.number()} items in your cart</div>`;

document.querySelector("#my-cart").innerHTML = cartText;
