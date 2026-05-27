import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'

const Navbar = () => {
    return (
        <div className='mx-auto flex justify-between items-center w-full p-5'>
            {/* Left Container */}
            <div className='flex-1 text-left'>
                
            </div>

            {/* Middle Container */}
            <div className='flex-1 flex justify-center font-bold'>
                <ul className='flex justify-between items-center gap-2'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/career'}>Career</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                </ul>
            </div>

            {/* Right Container */}
            <div className='flex-1 flex items-center justify-end gap-2'>
                <Image src={avatar} alt='user avatar' width={50} height={50} />
                <Link href={'/login'}>
                    <button className='btn btn-accent font-bold text-white'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;