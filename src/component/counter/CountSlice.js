import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:0,
}
 export const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementByOne:(initialState)=>{
            initialState.value=initialState.value+1
        },
        decrementByOne:(initialState)=>{
            initialState.value=initialState.value-1
        },
        incrementByAmount:(initialState)=>{
            initialState.value=initialState.value+10
        }
    
    },
})
export const {incrementByOne , decrementByOne}= counterSlice.actions
export const {incrementByAmount}= counterSlice.actions
export default counterSlice.reducer

