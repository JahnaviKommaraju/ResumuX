import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,  BrowserRouter as Router } from 'react-router-dom'  

import DataPage from './components/DataPage';
ReactDOM.render(
  <Router>  

  <React.StrictMode>
  <Route exact path="/" component={App} />  
      <Route path="/push_resume" component={DataPage} />  

  </React.StrictMode>     </Router>  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
