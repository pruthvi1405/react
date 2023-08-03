import {createSlice} from '@reduxjs/toolkit'

const formSlice=createSlice({
    name:"form",
    initialState:{
        name:'',
        cost:''
    },
    reducers:{
        addName:(state,action)=>{
            state.name=action.payload
        },
        addCost:(state,action)=>{
            state.cost=action.payload
        }    
    }
})


export {formSlice}
export const {addName,addCost}=formSlice.actions