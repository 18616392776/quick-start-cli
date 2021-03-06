import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './assets/scss/index.scss';

import PageHeader from './components/page-header/page-header';
import PageFooter from './components/page-footer/page-footer';
import Home from './views/home/home';

function App() {
  return (
    <div className="page-wrap">
      <div className="page">
        <div className="header">
          <PageHeader/>
        </div>
        <div className="page-content">
          <BrowserRouter>
            <Route path="/" component={Home}/>
          </BrowserRouter>
        </div>
      </div>
      <div className="footer">
        <PageFooter/>
      </div>
    </div>
  );
}

export default hot(App);
