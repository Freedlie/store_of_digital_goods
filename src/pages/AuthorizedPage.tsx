import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const AuthorizedPage:FC = () => {
    return (
        <div>
            <h2>you have successfully logged in</h2>
            <NavLink to={'/'}>Main Page</NavLink>
        </div>
    );
};

export default AuthorizedPage;