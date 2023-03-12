import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const BasketPage:FC = () => {

    const {isAuth} = useAppSelector(state => state.userReducer);


    return isAuth? (
        <div>
            items
        </div>
    ): <Navigate to={'/notLogin'}/>;
};

export default BasketPage;