import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//Ao renomear o index.js para index.tsx ocorrerá um erro dentro do arquivo, na seção const root, informando que o retorno do método document.getElementById pode retornar um valor null, ou seja, o root pode ser nulo.
//Podemos forçar o código a entender que o Id nunca será nulo, adicionando um ! ao final dessa linha. Desta maneira nós, como devs front-end, estamos garantindo que o método retornará um elemento.