import React from 'react'
// import Radium from 'radium'
import classes from './Car.module.scss'

class Car extends React.Component{

    state = {}
    
    // DEPRECATED !!!!
    // componentWillReceiveProps(nextProps){ // Компонент был изменён, предназначен чтоб синхронизировать локальный стейт с вхлдящими свойствами (редко используется в робочем коде)
    //     console.log("Car componentWillReciveProps(nextProps)", nextProps);
    // }
    
    // Тут можно оптимизировать приложение если вернуть true то это значит что компонент должен изменится и нужно его перерисовть
    shouldComponentUpdate(nextProps, nextState){ // Нужно ли компонент изменять ?
        console.log("Car shouldComponentUpdate(nextProps, nextState)", nextProps, nextState);
        //return true
        return nextProps.name.trim() !== this.props.name
    }
    
    // DEPRECATED !!!!
    // componentWillUpdate(nextProps, nextState){ // тут я уже знаю что компонент будет изменён, тут можно синхронизировать локальный стейт
    //     console.log("Car componentWillUpdate(nextProps, nextState)",nextProps, nextState);
    // }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Car getDirivedStateFromProps', nextProps, prevState);
        // return {
        // // Этот объект - результирующий стейт компонента
        // }
        return prevState // так просто верну исходное состояние
    }
    
    // Позвояет получить не изменённое ДОМ дерево до обновления
    componentDidUpdate(){
        console.log("Car componentDidUpdate()");
    }
    
    getSnapshotBeforeUpdate(){
        console.log("Car getSnapshotBeforeUpdate()");
    }
    
    // Вызывается когда идёт удаление компонента из дом дерева
    componentWillUnmount(){
        console.log("Car componentWillUnmount()");
    }


    render() {
        console.log("Car render");

        if (Math.random() > 0.7){
            throw new Error("Car random failed")
        }

        const inputClasses = [classes.input]
        if (this.props.name !== ""){
            inputClasses.push(classes.green)
        }else{
            inputClasses.push(classes.red)
        }
        
        if (this.props.name.length > 4){
            inputClasses.push(classes.bold)
        }
        
        const style = {
            border: '1px solid #cccccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaaaaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        }
         
        return (
            <div className={classes.Car} style={style}>
                <h2>Car name: {this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(" ")}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

//export default Radium(Car)
export default Car