import React from 'react';
import { Outlet } from 'react-router';

const AuthRoot = () => {
    return (
        <div>
            <h1>Authentication root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthRoot;