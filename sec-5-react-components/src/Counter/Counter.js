import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from '../Counter2/Counter2'
export default class Counter extends Component{
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
        // this.setState({
        //     counter: this.state.counter + 1
        // })
    }

    render(){
        return (
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>-</button>
            </Auxiliary>
        )
        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>-</button>
        //     </React.Fragment>
        // )
        // но так для каждого елемента массива нужен уникальный ключ
        // return [
        //     <h2 key={"0"}>Counter {this.state.counter}</h2>,
        //     <button key={"1"} onClick={this.addCounter}>+</button>,
        //     <button key={"2"} onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>-</button>
        // ]
        // return (
        //     <div>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>-</button>
        //     </div>
        // )
    }
}