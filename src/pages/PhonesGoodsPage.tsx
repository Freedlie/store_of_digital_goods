import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const PhonesGoodsPage:FC = () => {
    const {isAuth} = useAppSelector(state => state.userReducer);

    return isAuth? (
        <div>
            phones
        </div>
    ): <Navigate to={'/notLogin'}/>;
};

export default PhonesGoodsPage;