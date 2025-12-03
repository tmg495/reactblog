import React from 'react';
import NavBar from './NavBar';
import styles from './Layout.module.css';

const Layout = ({ children, handleSearch }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <NavBar handleSearch={handleSearch}/>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2023 BlogApp. All rights reserved.</p>
            </footer>
        </div>
    );
};
export default Layout;