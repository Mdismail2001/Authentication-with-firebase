import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <header>this is header</header>
                <Outlet></Outlet>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Root;