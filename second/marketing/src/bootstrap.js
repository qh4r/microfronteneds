import React from 'react';
import ReactDOM from 'react-dom';

const mount = (element) => {
  ReactDOM.render(
    <h1>Hello!</h1>,
    element,
  );
}

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector("#marketing-root-dev");
  if(devRoot) {
    mount(devRoot);
  }
}

export { mount };
