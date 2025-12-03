import {useState} from 'react'
import styles from './NavBar.module.css'
import {useDebouncedCallback} from 'use-debounce'

const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('')
    const debouncedOnSearch = useDebouncedCallback(val=>onSubmit(val), 1000)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        debouncedOnSearch(query)
    }

    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <input
                value={query}
                onChange={handleChange}
            />
            <button type='submit'>&#x1F50E;&#xFE0E;</button>
        </form>
    )
}

export default SearchBar