import { Button } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './nav.module.css';

interface INavProps {
    
};

const onClick = () => {

}

const Nav: FC<INavProps> = () => {
    return ( 
        <nav className={styles.menuBar}>
            <div className={styles.logo}>
                <Link href="/">Cat App</Link>
            </div>
        </nav>
    );
};

export default Nav;