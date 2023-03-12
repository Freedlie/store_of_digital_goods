import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const NotLoginPage:FC = () => {
    return (
        <div>
            <p>You need to log in to view the content of the page</p>
            <NavLink to={'/auth'}>Sign In</NavLink>
        </div>
    );
};

export default NotLoginPage;