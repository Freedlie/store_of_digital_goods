import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";
import css from './User.module.css';
import {Navigate, NavLink} from "react-router-dom";

const User:FC = () => {

    const {isAuth,user} = useAppSelector(state => state.userReducer);

    console.log(user);
    return isAuth?(
        <div className={css.userWrapper}>
            <div><span>ID</span>:{user.id}</div>
            <div> <span>email</span>:{user.email}</div>
            <div> <span>token</span> :{user.token}</div>
            <NavLink className={css.link} to={'/basket'}>My basket</NavLink>
        </div>
    ):<Navigate to={'/notLogin'}/>;
};

export default User;