import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './HomePage.module.css';


interface IHomePageProps {
    
};



const HomePage = () => {
    const router = useRouter();
    const onClick = () => {
        router.push('/cats')
    };

    return ( 
        <div className={styles.background} >
            <div >
                <h1>Cats World</h1>
                <h3>Find your new best friend today. Adopt a wonderful cat.</h3>
            </div>
            <div>
                <Button size='large' type='primary' onClick={onClick} >Start looking</Button>
            </div>
        </div>
    );
};

export default HomePage;  