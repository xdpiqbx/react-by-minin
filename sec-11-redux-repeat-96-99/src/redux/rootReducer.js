import {combineReducers} from 'redux'

import counterFunc1 from './reducers/counter1'
import counterFunc2 from './reducers/counter2'

export default combineReducers({
    counterFunc1, counterFunc2
})

// import {ADD, SUB, ADD_NUMBER, SUB_NUMBER} from './actionTypes'

// const initialState = {
//     counter: 0
// }

// export default function rootReducer (state = initialState, action){
//     switch (action.type){
//         case ADD:
//             return{
//                 counter: state.counter + 1
//             }
//         case SUB:
//             return{
//                 counter: state.counter - 1
//             }
//         case ADD_NUMBER:
//             return{
//                 counter: state.counter + action.payload
//             }
//         case SUB_NUMBER:
//             return{
//                 counter: state.counter - action.payload
//             }
//         default:
//             return state
//     }
// }