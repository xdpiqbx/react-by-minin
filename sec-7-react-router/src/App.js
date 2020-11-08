import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  state = {
    isLoggedIn: false
  }
  
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={ 'wfm-active' }
                activeStyle={{
                  color: "blue"
                }}
              >Home</NavLink>
            </li>
            <li><NavLink to="/about">About</NavLink></li>
            <li>
            <NavLink
              to={{
                pathname :'/cars'
              }}>
            Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <div style={{textAlign: 'center'}}>
            <h3>Is logged in {this.state.isLoggedIn ? "True" : "False"}</h3>
            <button onClick={()=>this.state.isLoggedIn ? this.setState({isLoggedIn: false}) : this.setState({isLoggedIn: true})}>Login</button>
        </div>
        <hr/>
        <Switch>
          <Route path='/' exact render={ () => <h1>Home Page</h1> } />

          {this.state.isLoggedIn ? <Route path='/about' component={About} /> : null}
          
          <Route path='/cars' exact component={Cars} />
          <Route path='/cars/:name' exact component={CarDetail} />
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>Page not found 404</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App
