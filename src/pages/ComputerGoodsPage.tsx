import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const ComputerGoodsPage:FC = () => {

    const {isAuth} = useAppSelector(state => state.userReducer);

    return isAuth? (
        <div>
            computers
        </div>
    ): <Navigate to={'/notLogin'}/>;
};

export default ComputerGoodsPage;