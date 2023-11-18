import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterinitialState = {counter:0,showCounter:'true'}

        

const counterSlice = createSlice({

    name:'counter',
    initialState:counterinitialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter=(!state.showCounter);
        }
    }
    
})

const authinitialState = {authenticated:false}
const authSlice = createSlice({
    name:'auth',
    initialState:authinitialState,
    reducers:{
        login(state){
            state.authenticated=true;
        },

        
        logout(state){
            state.authenticated=false;
        }
    }
    


})

// 

const store = configureStore({
    reducer:{counter:counterSlice.reducer, auth:authSlice.reducer}
});

export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;