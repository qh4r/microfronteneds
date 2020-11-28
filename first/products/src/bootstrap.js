import faker from 'faker';

const mount = (element) => {
  let products = '';

  Array.from({length: 5}).forEach(() => {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  });

  element.innerHTML = products;
};

if(process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-products');
  if(element) {
    mount(element);
  }
}

export { mount };
