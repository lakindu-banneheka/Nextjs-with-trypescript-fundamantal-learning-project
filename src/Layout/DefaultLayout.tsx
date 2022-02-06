import Head from 'next/head';
import React, { FC } from 'react';
import Nav from '../components/Nav/Nav';

interface IDefaultPropsLayout {
    nav?: Boolean,
    header?: { 
        title: string,
        favIconPath: string,
        meta: {
          name: string,
          content: string
        }
    }
};

const DefaultLayout: FC<IDefaultPropsLayout> = (props) => {
    return ( 
        <div>
            <Head> 
                <title>{props.header?.title}</title>
                <meta name={props.header?.meta.name} content={props.header?.meta.content} />
                <link rel="icon" href={props.header?.favIconPath} />
            </Head>
            { props.nav ?<Nav /> : <></> }
            <main> { props.children } </main>
        </div>
    );
};

export default DefaultLayout;