import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const usersApi=createApi({
    reducerPath:"user",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3005"
    }),
    endpoints(builder){
        return{
            fetchUsers:builder.query(
                {
                    query:()=>{
                        return{
                            url:'/users',
                            params:{
                                id:1
                            },
                            method:'GET',
                        }
                    }
                }
            )
        };
    }

})
export const {useFetchUsersQuery} = usersApi;
export {usersApi};
