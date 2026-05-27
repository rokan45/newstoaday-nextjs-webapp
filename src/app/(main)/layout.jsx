import Header from '@/component/shared/Header';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <Navbar/>
        {children}
        </>
    );
};

export default MainLayout;