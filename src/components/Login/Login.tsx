import React, {FC, useState} from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";

import css from './Login.module.css';
import secure from "../../img/secure-svgrepo-com.svg";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {userActions} from "../../redux";
import {app} from "../../fireBase";
import MainPage from "../../pages/MainPage";

const Login:FC = () => {

    const dispatch = useAppDispatch();

    const {isAuth} = useAppSelector(state => state.userReducer);

    console.log(isAuth);

    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');


    const handleLogin = async (email:string, password:string)=>{
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth,email,password)
            .then(({user})=>{
                if(user.uid){
                    dispatch(userActions.setAuth(true))
                }
                dispatch(userActions.setUser({
                    email: user.email,
                    id: user.uid,
                    // @ts-ignore
                    accessToken: user.accessToken,
                }))
            })
            .catch(() => alert('Invalid user'))
    }


    return !isAuth?(
        <div className={css.loginWrapper}>
            <div className={css.formBox}>
                <div className={css.form}>
                    <div className={css.logination}>
                        <div>
                            <input type="email"
                                   name='email'
                                   placeholder='enter your email'
                                   value={email}
                                   onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="password"
                                   name='password'
                                   placeholder='enter your password'
                                   value={password}
                                   onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <button className={css.bntSend} onClick={()=>handleLogin(email,password)}><p>signIn</p></button>
                        <div className={css.signIn}>
                            <p>haven't account?</p>
                            <NavLink to={'/auth'}><button className={css.bntSend}>Create account</button></NavLink>
                        </div>
                    </div >



                </div>

                <div className={css.formImg}>
                    <img className={css.secure} src={secure} alt="secure"/>
                </div>
            </div>
        </div>
    ):
        <Navigate to={'/authorized'}/>
};

export default Login;