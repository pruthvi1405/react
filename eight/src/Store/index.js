import {configureStore} from '@reduxjs/toolkit';
import { usersApi } from './Apis/usersApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store=configureStore({
    reducer:{
        [usersApi.reducerPath]:usersApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(usersApi.middleware)
    }
})

setupListeners(store.dispatch);

export {useFetchUsersQuery} from './Apis/usersApi';
export {store};
