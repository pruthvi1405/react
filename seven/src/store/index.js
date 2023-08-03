import {configureStore} from '@reduxjs/toolkit';
import {formSlice,addCost,addName} from './FormSlice';
import {carSlice,addCar,deleteCar,changeTerm} from './CarSlice'


const store= configureStore({
    reducer:{
        form:formSlice.reducer,
        cars:carSlice.reducer
    }
})


export {store,addCost,addName,addCar,deleteCar,changeTerm}