import React from 'react';
import {Header} from '../components/dashboard/header';
import {Sidebar} from '../components/dashboard/sidebar';
import {Footer} from '../components/dashboard/footer';
import styles from './DashboardLayout.module.css'; // Import your CSS module for layout styling

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <Header />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
