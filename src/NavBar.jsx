import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';

const NavBar = ({handleSearch, query, setQuery}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    let location=useLocation().pathname;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeSearchBar = () => {
        setIsSearchBarOpen(false);
        setQuery('');
        handleSearch('');
    }

    return (
        <div>
            <nav className={styles.navBar}>
                <Link 
                    to="/" 
                    className={`${isSearchBarOpen ? styles.isClosed : styles.logo}`}
                    onClick={closeSearchBar}
                >Blog Application</Link>


                <div className={styles.links}>
                    <Link to="/" onClick={closeSearchBar}>Home</Link>
                    <Link to='/post-form/new'>Add Post</Link>
                    <Link to="/about">About</Link>
                </div>

                <SearchBar 
                    onSubmit={handleSearch} 
                    query={query} 
                    setQuery={setQuery}
                    isSearchBarOpen={isSearchBarOpen}
                    setIsSearchBarOpen={setIsSearchBarOpen}
                    searchButtonVisible={location=='/'}
                />

                <button
                className={`${isSearchBarOpen ? styles.isClosed : styles.hamburger}`}
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