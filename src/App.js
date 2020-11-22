import React, {Fragment, Component } from 'react';
import './App.css';
import { Home, Errors, SingleRoom, Room } from './components/pages'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'



class App extends Component {
  
  render() {
  return (
  <Fragment>
   <Navbar />
   <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/rooms" component={Room}></Route>
      <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
      <Route component={Errors}></Route>
    </Switch>
   </Fragment>
  );
}

}


export default App

