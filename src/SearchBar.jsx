import {useState} from 'react'
import styles from './NavBar.module.css'
import {useDebouncedCallback} from 'use-debounce'

const SearchBar = ({onSubmit, query, setQuery, isSearchBarOpen, setIsSearchBarOpen, searchButtonVisible}) => {

    const debouncedOnSearch = useDebouncedCallback(val=>onSubmit(val), 1000)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSearchBarOpen) {
            onSubmit(query);
        } else {
            setIsSearchBarOpen(true);
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        debouncedOnSearch(query)
    }

    return (
        <form className={`${styles.search} ${searchButtonVisible? '': styles.hidden}`} onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={handleChange}
                placeholder='Search posts...'
                className={`${isSearchBarOpen? styles.isOpen: styles.isClosed}`}
            />
            <button 
                type='submit'
            >&#x1F50E;&#xFE0E;</button>
        </form>
    )
}

export default SearchBar