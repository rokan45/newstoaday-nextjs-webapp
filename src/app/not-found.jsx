import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen text-center items-center justify-center flex flex-col'>
            <h1 className='font-bold text-red-400 text-3xl mb-5'>This page is not currently available</h1>

            <Link href={'/'}>
            <button className='btn btn-active'>Back To Homepage</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;