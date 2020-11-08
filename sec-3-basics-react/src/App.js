import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';


class App extends Component{
  state = {
    cars:[
      {name: "Ford", year: 2018},
      {name: "Audi", year: 2016},
      {name: "Mazda 8", year: 2010}
    ],
    pageTitle: "React Components",
    showCars: false
  }

  onChangeName(name, index){
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  deleteHandler(index){
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({ cars })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render(){
    const divStyle = {
      'textAlign': 'center',
      'backgroundColor': 'teal'
    }

    let cars = null

    if(this.state.showCars){
      cars = this.state.cars.map((car, index)=>{
        return (
          <Car
            key = {index}
            name={car.name}
            year={car.year}
            onDelete = { this.deleteHandler.bind(this, index) }
            onChangeName = { (event) => this.onChangeName(event.target.value, index) }
          />
        )
      })
    }

    return (
      <div className="App" style={divStyle}>
        <h2 style={{color: "#CCCCCC", fontSize: '25px'}}>{this.state.pageTitle}</h2>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        { cars }
      </div>
    );
  }
}

export default App;
