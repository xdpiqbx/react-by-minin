import React from 'react'

export default class ErrorBoundary extends React.Component{

    state = {
        hasError: false
    }
    
    // Будет вызван если поймёт что вложеный в него компонент отработал с ошибкой
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        // При этом условии не упадёт весь компонент, а на его месте выведется
        // <h1 style={{color: 'red'}}>Something went wrong</h1>
        //https://reactjs.org/docs/error-boundaries.html
        if(this.state.hasError){
            return <h1 style={{color: 'red'}}>Something went wrong</h1>
        }

        return this.props.children
    }
}