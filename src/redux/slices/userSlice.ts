import {IUser} from "../../interfaces/user.interface";
import {createSlice} from "@reduxjs/toolkit";


const initialState:IUser = {
    user:{
        email: '',
        name: '',
        surname: '',
        password: '',
        token:'',
        id: 0
    },
    isAuth: false

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action){
                state.user.email = action.payload.email;
                state.user.name = action.payload.name;
                state.user.surname = action.payload.surname;
                state.user.password = action.payload.password;
                state.user.token = action.payload.accessToken;
                state.user.id = action.payload.id;
        },
        removeUser(state){
            state.user.email = '';
            state.user.name ='';
            state.user.surname = '';
            state.user.password = '';
            state.user.token = '';
            state.user.id = 0;
        },
        setAuth(state,action){
            state.isAuth = action.payload
        }
    }
})

const {
    reducer: userReducer,
    actions:{
        setUser,removeUser,setAuth
    }

} = userSlice

const userActions = {
    setUser,
    removeUser,
    setAuth
}

export {userReducer, userActions}