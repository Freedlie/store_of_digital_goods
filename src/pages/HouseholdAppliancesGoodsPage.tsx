import React, {FC} from 'react';
import {useAppSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const HouseholdAppliancesGoodsPage:FC = () => {
    const {isAuth} = useAppSelector(state => state.userReducer);

    return isAuth? (
        <div>
            Household appliances
        </div>
    ): <Navigate to={'/notLogin'}/>;
};

export default HouseholdAppliancesGoodsPage;