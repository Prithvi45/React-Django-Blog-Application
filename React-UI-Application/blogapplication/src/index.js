import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8080';
// axios.defaults.headers.common['Authorization'] = 'Token da74e73c798a7fd94141546f7469d57d931e4913';

axios.interceptors.request.use(request =>{
  console.log(request);
// Edit request  config here , like Authentication
 // request.push({'Access-Control-Allow-Origin':'*'})
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
}
);

axios.interceptors.response.use(response =>{
  console.log(response);
// Edit request  config here , like Authentication
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
