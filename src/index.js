import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.css';


//react dom render tik vienoje vietoje, kur musu elementai bus renderinami i html'a
//react DOM turi tureti su dalykus what ir where

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
