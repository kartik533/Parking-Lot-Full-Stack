import React from 'react';
import logo from './logo.svg';
import './App.css';
import Front from './Front'
import Park from './Park'
import Exit from './Exit'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Chart from './Chart'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Front /> */}

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Front}></Route>
            <Route path="/park" component={Park}></Route>
            <Route path="/exit" component={Exit}></Route>
            <Route path = "/chart" component={Chart}></Route>
          </Switch>

        </BrowserRouter>
      </div>
    );
  }

}

export default App;
