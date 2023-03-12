import React, {FC} from 'react';

import css from './Header.module.css';
import filter from '../../img/filter-search-svgrepo-com.svg';
import search from '../../img/search-svgrepo-com.svg';
import user from '../../img/user-svgrepo-com.svg';
import basket from '../../img/basket-free-material-svgrepo-com.svg'
import signIn from "../../img/sign-in-svgrepo-com.svg";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {useAppSelector} from "../../hooks";

const Header:FC = () => {

    const {isAuth} = useAppSelector(state => state.userReducer);


    return (
        <header className={css.wrapper}>
            <div className={css.row}>
                <div>
                    <img className={css.filterImg} src={filter} alt="filter"/>
                </div>
                <div>
                    <input className={css.input} type="text" name='query'  placeholder="Search..."/>
                </div>
                <div>
                    <button type='submit'><img className={css.searchImg} src={search} alt="search"/></button>
                </div>
            </div>
            <div className={css.additional}>
                <div>
                            <NavLink to={'/user'}><img className={css.userImg} src={user} alt="user"/></NavLink>
                </div>
                <div>
                    <NavLink to={'/auth'}> <img className={css.basketImg} src={signIn} alt="auth"/></NavLink>
                </div>
                <div>
                    <img className={css.basketImg} src={basket} alt="basket"/>
                </div>
            </div>
        </header>
    );
};

export default Header;