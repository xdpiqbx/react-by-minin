import {ADD, SUB, ADD_NUMBER, SUB_NUMBER, ADD2, SUB2, ADD_NUMBER2, SUB_NUMBER2} from './actionTypes'

export function onAdd(){
    return {type: ADD}
}

export function onSub(){
    return {type: SUB}
}

export function onAddNumber(number){
    return {type: ADD_NUMBER, payload: number}
}

export function onSubNumber(number){
    return {type: SUB_NUMBER, payload: number}
}



export function onAdd2(){
    return {type: ADD2}
}

export function onSub2(){
    return {type: SUB2}
}

export function onAddNumber2(number){
    return {type: ADD_NUMBER2, payload: number}
}

export function onSubNumber2(number){
    return {type: SUB_NUMBER2, payload: number}
}



// export function onAsyncAdd(number){
//     return {type: ASYNC_ADD, payload: number}
// }

export function onAsyncAdd(number){
    return (dispatch) => {
        setTimeout(()=>{
            dispatch (onAddNumber(number))
        }, 3000)        
    }
}