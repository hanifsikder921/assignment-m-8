import React from 'react';
import Navbar from './../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className="flex-1 bg-gray-100">
                <div className='max-w-screen mx-auto px-8 md:px-18 lg:px-16 xl:px-24'>
                    <Outlet />
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;