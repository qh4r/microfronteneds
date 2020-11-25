import faker from 'faker';

let products = '';

Array.from({length: 5}).forEach(() => {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
});

document.querySelector('#dev-products').innerHTML = products;

