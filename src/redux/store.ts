import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";


const rootReducer = combineReducers({
    userReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

const store = setUpStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}