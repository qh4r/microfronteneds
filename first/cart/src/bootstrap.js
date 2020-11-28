import faker from 'faker';


const mount = (element) => {
  const cartText = `<div>You got ${faker.random.number()} items in your cart</div>`;
  element.innerHTML = cartText
}


if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector("#my-cart");
  if (element) {
    mount(element)
  }
}

export {mount};

