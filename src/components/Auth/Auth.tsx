import React, {FC, useState} from 'react';
import {NavLink, redirect} from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

import css from './Auth.module.css';
import secure from '../../img/secure-svgrepo-com.svg';
import {app} from "../../fireBase";
import {useAppDispatch} from "../../hooks";
import {userActions} from '../../redux'

const Auth:FC = () => {

    const dispatch = useAppDispatch();


    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [name,setName] = useState<string>('');
    const [surname,setSurname] = useState<string>('');

    const handleAuth = async (email:string,password:string)=>{
        const auth = getAuth(app);
        const req = await createUserWithEmailAndPassword (auth,email,password)
            .then(({user})=>{
                console.log(user,'user');
                dispatch(userActions.setUser({
                    email: user.email,
                    id: user.uid,
                    // @ts-ignore
                    accessToken: user.accessToken,
                    name: name,
                    surname: surname
                }))
            })
            .catch(console.log)
        alert('sign in your account')
    }
    return (
        <div className={css.loginWrapper}>
            <div className={css.formBox}>
                <div className={css.form}>
                    <div className={css.info}>
                        <div>
                            <p>Create account</p>
                        </div>
                        <div className={css.inputWrapper}>
                            <input className={css.input}
                                   type="text"
                                   name="name"
                                   placeholder='enter your name'
                                   value = {name}
                                   onChange={(e)=> setName(e.target.value)}
                            />
                            <input className={css.input}
                                   type="text"
                                   name="surname"
                                   placeholder='enter your surname'
                                   value={surname}
                                   onChange={(e)=> setSurname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={css.logination}>
                        <div>
                            <input type="email"
                                   name='email'
                                   placeholder='enter your email'
                                   value={email}
                                   onChange={(e)=> setEmail(e.target.value)}
                            />
                            <p>you can use letters of the Latin alphabet, numbers and symbols</p>
                        </div>
                        <div>
                            <input type="password"
                                   name='password'
                                   placeholder='enter your password'
                                   value={password}
                                   onChange={(e)=> setPassword(e.target.value)}
                            />
                            <p>The password must contain at least eight characters, include letters, numbers and special symbols</p>
                        </div>
                    </div>
                    <div className={css.send}>
                            <button className={css.bntSend} onClick={()=> handleAuth(email,password)}>Create</button>
                    </div >

                    <div className={css.signIn}>
                        <p>Already have account?</p>
                        <NavLink to={'/signIn'}><button className={css.bntSend}>Sign In</button></NavLink>
                    </div>

                </div>
                <div className={css.formImg}>
                    <img className={css.secure} src={secure} alt="secure"/>
                </div>
            </div>
        </div>
    );
};

export default Auth;