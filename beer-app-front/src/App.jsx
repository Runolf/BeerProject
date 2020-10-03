import React, {Component} from 'react';
import BeerCompo from './BeerComponent/BeerComponent/BeerComponent';
import AddBeerCompo from './BeerComponent/BeerComponent/AddBeerComponent';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <nav>
            <Link to="/">All beers</Link>
            <Link to="/add">Add a new beer</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={BeerCompo}/>
            <Route exact path="/add" component={AddBeerCompo}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
