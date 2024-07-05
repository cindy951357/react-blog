import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GlowButton from './Button/GlowButton';

const Menu: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className="menu-container flex justify-center gap-2 mt-4">
            <div className='dummy-div'></div> 
            <div className="col-span-4">
            <div className="menu flex gap-2 border-b-2 border-white">
                <Link href="/">
                    <GlowButton btnText={'Home'} color={'LavenderBlush'}/>
                </Link>
                <Link href="/write">
                    <GlowButton btnText={'Write'} color={'LavenderBlush'}/>
                </Link>
                <Link href="/write">
                    <GlowButton btnText={'About'} color={'LavenderBlush'}/>
                </Link>
            <div className='dummy-div'></div>
            </div>
            <div className='dummy-div'></div> 
        </div>
    </div>
    )
};

export default Menu;