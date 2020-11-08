import classes from './App.module.scss';
import React, {Component} from 'react'
import { connect } from 'react-redux' // =- 1 -= **************************************************************************************
import {ADD, SUB, ADD_NUMBER, SUB_NUMBER} from './redux/actionTypes'

class App extends Component {

  // =- 3 -= **************************************************************************************
  // После описания mapStateToProps и изменения в компоненте state на props локальный state больше не нужен
  // state = {
  //   counter: 0
  // }

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value
    })
  }

  render() {
    //console.log(this.props.onAdd)
    return (
      <div className={classes.App}>
        {/* <h1>Счетчик <strong>{this.state.counter}</strong></h1> // =- 4 -= ************************************************************************************** */}
        <h1>Счетчик <strong>{this.props.reduxPropsCounter}</strong></h1> {/* Меняю state на props */}

        <hr/>

        <div className={classes.Actions}>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          {/* <button onClick={() => this.updateCounter(1)}>Добавить 1</button> */}
          {/* <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button> */}
        </div>
        <div className={classes.Actions}>
          <button onClick={() => this.props.onAddNumber(5)}>Добавить</button>
          <button onClick={() => this.props.onSubNumber(5)}>Вычесть</button>
        </div>
      </div>
    )
  }
}

// Первая ф-ция хелпер которая передаётся первым параметром в connect (когда связываю Redux с компонентом)
function mapStateToProps(stateRedux){ // Тот state который передаётся в rootReducer // =- 5 -= **************************************************************************************
  return{
    reduxPropsCounter: stateRedux.counter
  }
}
// С помощью mapStateToProps в компоненте можно обращатся не как к state а как к props (в index всё обернули в <Provider store={store}>)
// Теперь локальный state компонента не нужен поскольку обращаюсь к state из rootReducer


// Вторая ф-ция хелпер которая передаётся вторым параметром в connect (когда связываю Redux с компонентом)
// const store = Redux.createStore(reducer)
// store.dispatch(someAction)
// И тут dispatch-им эти Actions чтоб они были доступны из под Props
function mapDispatchToProps(dispatch){ // =- 5 -= **************************************************************************************
  return{
    onAdd: () => dispatch({type: ADD}),
    onSub: () => dispatch({type: SUB}),
    onAddNumber: number => dispatch({type: ADD_NUMBER, payload: number}),
    onSubNumber: number => dispatch({type: SUB_NUMBER, payload: number})
  }
}

// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App) // =- 2 -= **************************************************************************************
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



// Было
// import classes from './App.module.scss';
// import React, {Component} from 'react'

// class App extends Component {
//   state = {
//     counter: 0
//   }

//   updateCounter(value) {
//     this.setState({
//       counter: this.state.counter + value
//     })
//   }

//   render() {
//     return (
//       <div className={classes.App}>
//         <h1>Счетчик <strong>{this.state.counter}</strong></h1>

//         <hr/>

//         <div className={classes.Actions}>
//           <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
//           <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App