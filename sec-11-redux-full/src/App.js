import React, {Component} from 'react'
import classes from './App.module.scss'
import {connect} from 'react-redux'
import Counter from './Counter'
import { add, addNumber, asyncAdd, sub } from './redux/actions/action'

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className={classes.Actions}>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div className={classes.Actions}>
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAddNumber(-15)}>Вычесть 15</button>
        </div>
        <div>
          <button onClick={() => this.props.onAsyncAdd(100)}>
            Асинхронно добавить 100
          </button>
        </div>
          <Counter />
      </div>
    )
  }
}

//тут state это не state компопента это state redux который передаю в reducer
function mapStateToProps(state){
  return{
    counter: state.counter1.counter
  }
}
//теперь в updateCounter я буду использовать state не как state а как props

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

// Порядок передачи параметров важен!
// export default connect(null, mapDispatchToProps)(App) // если не хочу передавать mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
