import BreakingNews from '@/component/shared/BreakingNews';
import Header from '@/component/shared/Header';
import Navbar from '@/component/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar/>
        {children}
        </>
    );
};

export default MainLayout;