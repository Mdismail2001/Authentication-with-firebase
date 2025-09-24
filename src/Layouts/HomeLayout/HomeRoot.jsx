import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Header/NavBar';

const HomeRoot = () => {
    return (
        <div>
            <header><NavBar></NavBar></header>

                <Outlet></Outlet>
                
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default HomeRoot;