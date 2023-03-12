import React, {FC} from 'react';

import css from './Banners.module.css';
import laptop from '../../img/DALL·E 2023-03-01 15.34.38 - create banner for salling laptop.png';
import phones from '../../img/DALL·E 2023-03-01 15.39.05 - create banner for salling phones.png'
import headphones from '../../img/DALL·E 2023-03-01 15.45.16 - create banner for salling headphones.png';
import householdAppliances from '../../img/DALL·E 2023-03-01 15.53.45 - create banner for salling household appliances.png';
import {NavLink} from "react-router-dom";


const Banners:FC = () => {
    return (
        <div className={css.bannersWrapper}>
            <NavLink to={'/computers'}><img className={css.imgSize} src={laptop} alt="laptops Banners"/></NavLink>
            <NavLink to={'/phones'}><img className={css.imgSize} src={phones} alt="phones Banners"/></NavLink>
            <NavLink to={'/headphones'}><img className={css.imgSize} src={headphones} alt="headphones Banners"/></NavLink>
            <NavLink to={'/houseHold'}><img className={css.imgSize} src={householdAppliances} alt="household Appliances Banners"/></NavLink>
        </div>
    );
};

export default Banners;