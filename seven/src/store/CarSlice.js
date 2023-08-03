import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const carSlice=createSlice({
    name:"cars",
    initialState:{
        cars:[],
        searchTerm:''
    },
    reducers:{
        addCar:(state,action)=>{
            state.cars.push({
                name:action.payload.name,
                cost:action.payload.cost,
                id:nanoid()
            })
        },
        deleteCar:(state,action)=>{
            const final=state.cars.filter((car)=>{
                return car.id!==action.payload
            })

            state.cars=final
        },
        changeTerm:(state,action)=>{
            state.searchTerm=action.payload
        }

    }
})

export {carSlice}
export const {addCar,deleteCar,changeTerm}=carSlice.actions