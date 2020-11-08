import React, {Component} from 'react'
import { connect } from 'react-redux'
import classes from './Counter.module.scss'
// import {ADD, SUB, ADD_NUMBER, SUB_NUMBER} from './redux/actions/actionTypes'
import {onAdd2, onSub2, onAddNumber2, onSubNumber2} from './redux/actions/actions'

class Counter extends Component{
    render(){
        return(
            <div className={classes.Counter}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <div>
                    <button onClick={this.props.onAdd}>Add</button>
                    <button onClick={this.props.onSub}>Sub</button>
                </div>
                <div>
                    <button onClick={() => this.props.onAddNumber(5)}>Add</button>
                    <button onClick={() => this.props.onSubNumber(5)}>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        counter: state.counterFunc2.counter2
    }
}

// function mapDispatchToProps(dispatch){ // =- 5 -= **************************************************************************************
//     return{
//       onAdd: () => dispatch({type: ADD2}),
//       onSub: () => dispatch({type: SUB2}),
//       onAddNumber: number => dispatch({type: ADD_NUMBER2, payload: number}),
//       onSubNumber: number => dispatch({type: SUB_NUMBER2, payload: number})
//     }
//   }

function mapDispatchToProps(dispatch){ // =- 5 -= **************************************************************************************
    return{
      onAdd: () => dispatch(onAdd2()),
      onSub: () => dispatch(onSub2()),
      onAddNumber: number => dispatch(onAddNumber2(number)),
      onSubNumber: number => dispatch(onSubNumber2(number))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)