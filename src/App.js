import React from 'react';

import './scss/main.scss';
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import Home from './home/home'
import Catagery from './catagery/catagery'
import Cart from './cart/cart'
import Self from './self/self'
import Search from './search/search'
import Catagerytjfl from './catagery/catagerytjfl'
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/search" component={Search} />
        <div className="nav">
          <NavLink to="/home" activeClassName="activeStyle">
            <i className="fa fa-home fa-fw"></i>
            <span>首页</span>
          </NavLink>
          <NavLink to="/catagery" activeClassName="activeStyle">
            <i className="fa fa-navicon" aria-hidden="true"></i>
            <span>分类</span>
          </NavLink>
          <NavLink to="/cart" activeClassName="activeStyle">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>购物车</span>
          </NavLink>
          <NavLink to="/self" activeClassName="activeStyle">
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <span>我的</span>
          </NavLink>
        </div>
        <div className="view">
          <Switch>
            <Redirect from="/" to="/home" exact/>
            <Route path="/home" component={Home} />
            <Route path="/catagery" component={Catagery} />
            <Route path="/cart" component={Cart} />
            <Route path="/self" component={Self} />
            
          </Switch>

        </div>



      </div>
    </Router>
  );
}

export default App;
