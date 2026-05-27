import Navbar from '@/component/shared/Navbar';
import React from 'react';
import { geistSans } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${geistSans.className}`}>
        <Navbar/>
        {children}
        </div>
    );
};

export default AuthLayout;