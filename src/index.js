import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(store.getState())
store.subscribe(()=> console.log(store.getState()) );

root.render(
  
  <Provider store={store}>
    <App />
   </Provider>
    
    
 
);

