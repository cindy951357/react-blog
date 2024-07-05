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
        <div className="menu flex justify-center gap-2">
            <Link href="/">
                <GlowButton btnText={'Home'} color={'LavenderBlush'}/>
            </Link>
            <Link href="/write">
                <GlowButton btnText={'Write'} color={'LavenderBlush'}/>
            </Link>
        </div>
    )
};

export default Menu;