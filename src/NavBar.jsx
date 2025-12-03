import React, { useState } from 'react';
import { Link } from 'react-router';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';

const NavBar = ({handleSearch}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className={styles.navBar}>
                <Link to="/" className={styles.logo}>Blog Application</Link>

                <SearchBar onSubmit={handleSearch}/>

                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to='/post-form/new'>Add Post</Link>
                    <Link to="/about">About</Link>
                </div>

                <button
                className={styles.hamburger}
                onClick={toggleMobileMenu}

                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen? styles.isOpen: ""}`}>
                <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                <Link to='/post-form/new' onClick={toggleMobileMenu}>Add Post</Link>
                <Link to="/about" onClick={toggleMobileMenu}>About</Link>
            </div>
        </div>
    );
};
export default NavBar;