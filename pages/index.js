import React from 'react';
import Layout from '../components/Layout';
import styles from '/components/Styles.module.css';

const Home = () => {
  return (
    <Layout>
     
     <div className={styles.cover}>
      <h1>Welcome to My Landing Page</h1>
      <p>This is a basic landing page built with Next.js and normal CSS.</p>
      </div>

<section className={styles.cardSection}>
  <h2>Featured Content</h2>
  <div className={styles.cardLayoutContainer}>
    <div className={styles.card}>
      <h3>Card 1</h3>
      <p>This is the content of Card 1.</p>
    </div>
    <div className={styles.card}>
      <h3>Card 2</h3>
      <p>This is the content of Card 2.</p>
    </div>
    <div className={styles.card}>
      <h3>Card 3</h3>
      <p>This is the content of Card 3.</p>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Home;
