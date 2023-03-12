import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const HeadphonesGoodsPage:FC = () => {
    const {isAuth} = useAppSelector(state => state.userReducer);

    return isAuth? (
        <div>
            headPhones
        </div>
    ): <Navigate to={'/notLogin'}/>;
};

export default HeadphonesGoodsPage;