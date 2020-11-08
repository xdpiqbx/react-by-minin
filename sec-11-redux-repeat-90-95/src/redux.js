const Redux = require('redux')

//Как правило константы выносятся в отдельный файл
const ADD = 'ADD'
const SUB = 'SUB'
const ADD_NUMBER = 'ADD_NUMBER'

const initialState = {
    counter: 0
}

// Основные части redux
//****************************************************************************************************************** */
// Reducer - js функция которая делает некоторые преобразования и всегда должна возвращать НОВЫЙ!!! state (не мутировать текущий!!!)
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.number
            }
        default:
            return state
    }
}
//****************************************************************************************************************** */
//   Actions
const addCounter = {
    type: ADD
}

const subCounter = {
    type: SUB
}

const addNumber = {
    type: ADD_NUMBER,
    number: 100
}
//****************************************************************************************************************** */
//   Store - то место где хранятся все данные (весь state, всего приложения хранится в одном объекте)
const store = Redux.createStore(reducer) // Сюда нужно передать сущность которая называется - Reducer

// Можно не вызывать каждый раз console.log(store..... а подписатся на изменения
store.subscribe( ()=> {
    console.log("Subscribe: ", store.getState())
})

//После передачи Reducer в store можно получать состояние store
console.log(store.getState()) // Тут ещё небыло изменения "Subscribe: " не отработал

store.dispatch(addCounter)
console.log(store.getState())

store.dispatch(subCounter)
console.log(store.getState())

store.dispatch(addNumber)
console.log(store.getState())

//---console.log-----------------------------------------------------------
// { counter: 0 }

// Subscribe:  { counter: 1 }
// { counter: 1 }

// Subscribe:  { counter: 0 }
// { counter: 0 }

// Subscribe:  { counter: 100 }
// { counter: 100 }