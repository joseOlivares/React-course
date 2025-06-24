import React from 'react'
import { createRoot } from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
//import { MyComponent } from './components/myComponent';
//import { CounterApp } from './components/counterApp/counterApp';
//import {  HelloWorldApp } from './HelloWorldApp'; //nuestro component principal

import './styles.css';
import { FirstApp } from './FirstApp';


const rootElement = document.getElementById('root');
if (rootElement) {//renderizando el componente
  createRoot(rootElement).render(
    <React.StrictMode>
      {/*<CounterApp value={10} />*/}
      <FirstApp title='React App' subtitle='Curso de React' name='José Olivares' />
    </React.StrictMode>
  );
}