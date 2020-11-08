import React, { Component } from 'react';
import Car from './Car/Car'
import './App.css';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)
// false - задал значени по умолчанию как clicked: false,

class App extends Component{
  constructor(props){
    console.log('App constructor');
    super(props)
    this.state = {
      cars:[
        {name: "Ford", year: 2018},
        {name: "Audi", year: 2016},
        {name: "Mazda 8", year: 2010}
      ],
      clicked: false,
      pageTitle: "React Components",
      showCars: false
    }
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

  // componentWillMount(){ // has been renamed !!!
  //   console.log('App -> component Will Mount()');
  // }
  
  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log('App getDirivedStateFromProps', nextProps, prevState);
  //   return prevState // так просто верну исходное состояние
  // }

  //static getDerivedStateFromProps(nextProps, prevState){

  // componentDidMount(){ // Значит что уже отработал рендер
  //   console.log('App -> component Did Mount()');
  // }
  
  render(){
    console.log('App -> render');
    const divStyle = {
      'textAlign': 'center'
    }

    let cars = null

    if(this.state.showCars){
      cars = this.state.cars.map((car, index)=>{
        return (
          // <ErrorBoundary key = {index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete = { this.deleteHandler.bind(this, index) }
              onChangeName = { (event) => this.onChangeName(event.target.value, index) }
            />
          // </ErrorBoundary>
        )
      })
    }
    
    return (
      <div className="App" style={divStyle}>
        <h1>{this.props.title}</h1>
        
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        
        <h2 style={{color: "#CCCCCC", fontSize: '25px'}}>{this.state.pageTitle}</h2>
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        <button onClick={() => this.setState({clicked: true})}>Change click</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
          { cars }
        </div>
      </div>
    );
  }
}

export default App;
