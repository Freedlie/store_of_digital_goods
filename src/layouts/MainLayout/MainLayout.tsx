import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../../components/Header/Header";

import css from './MainLayout.module.css';

const MainLayout = () => {

    return (
        <div>
                <Header/>
                <div className={css.wrapper}>
                <Outlet/>
                </div>
        </div>
    );
};

export default MainLayout;