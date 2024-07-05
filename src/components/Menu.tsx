import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Menu: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className="menu">
            <Link href="/home">
                <button>Home</button>
            </Link>
            <Link href="/write">
                <button>Write</button>
            </Link>
        </div>
    )
};

export default Menu;