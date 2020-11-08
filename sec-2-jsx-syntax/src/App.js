import React, { Component } from 'react';
import Car from './Car/Car'
//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>Hi React here</h2>
//     </div>
//   );
// }

class App extends Component{
  render(){
    const divStyle = {
      'textAlign': 'center',
      'backgroundColor': 'teal'
    }
    return (
      <div className="App" style={divStyle}>
        <h2 style={{color: "#CCCCCC", fontSize: '25px'}}>Hi React here</h2>
        <Car name={"Ford"} year={"2018"} />
        
        <Car name="Audi" year={"2020"}>
            <p>BEFORE In component</p>
            <div>
              <Car name={'Audi 01'} year={"2010"} />
            </div>
            <p>AFTER In component</p>
        </Car>
        
        <Car name={'Mazda 8'} year={"2010"} />
      </div>
    );
  }
}

export default App;
