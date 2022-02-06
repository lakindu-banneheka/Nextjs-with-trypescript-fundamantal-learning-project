import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../Layout/DefaultLayout';
import HomePage from '../components/HomePage/HomePage';
import { header } from '../hooks/header';


const Home: NextPage = () => {
  const homeHead = header
  return (
    <div className={styles.container}>
      <DefaultLayout nav header={homeHead} >
        <HomePage />
      </DefaultLayout>
    </div>
  )
};

export default Home;
