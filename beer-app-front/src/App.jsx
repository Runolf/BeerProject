import React, {Component} from 'react';
import BeerCompo from './BeerComponent/BeerComponent/BeerComponent';
import AddBeerCompo from './BeerComponent/BeerComponent/AddBeerComponent';
import TestCompo from './BeerComponent/BeerComponent/TestComponent';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom';
class App extends Component {
  render(){
    const styleNavBar = {
      width: "100%"
    }
    return(
      <div>
        <Router>
          <nav className="nav justify-content-center border border-secondary p-3 mb-2 bg-dark" style={styleNavBar}>
            <div className="nav-item">
              <Link to="/" className="nav-link  text-white">All beers</Link>
            </div>
            <div className="nav-item">
              <Link to="/add" className="nav-link  text-white">Add a new beer</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={BeerCompo}/>
            <Route exact path="/add" component={AddBeerCompo}/>
            <Route exact path= "/test" component={TestCompo}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
