import {useState} from 'react'
import styles from './NavBar.module.css'
import {useDebouncedCallback} from 'use-debounce'

const SearchBar = ({onSubmit, query, setQuery, isSearchBarOpen, setIsSearchBarOpen, searchButtonVisible}) => {

    const debouncedOnSearch = useDebouncedCallback(val=>onSubmit(val), 1000)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSearchBarOpen) {
            setIsSearchBarOpen(false)
        } else {
            setIsSearchBarOpen(true);
            onSubmit(query);
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        debouncedOnSearch(query)
    }

    return (
        <form className={`${isSearchBarOpen ? styles.closeSearch : styles.search} ${searchButtonVisible ? '' : styles.hidden}`} onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={handleChange}
                placeholder='Search posts...'
                className={`${isSearchBarOpen? styles.isOpen: styles.isClosed}`}
            />
            <button 
                type='submit'
                className={`${isSearchBarOpen ? styles.closeButton : styles.searchButton}`}
            >{`${isSearchBarOpen ? '✕' : '🔎︎'}`}</button>
        </form>
    )
}

export default SearchBar