import { useEffect, useState } from 'react';
import WeatherMainPage from './WeatherMainPage'
import '../styles/Search.css'
import { Box } from '@mui/system';

const Search = () => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);
    // Try to add state that keeps track of whether search result has a "state"

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (query.trim() !== '') {
                    const url = new URL("http://api.openweathermap.org/geo/1.0/direct?");
                    url.searchParams.append("q", query);
                    url.searchParams.append("limit", 5);
                    url.searchParams.append("appid", API_KEY);
                    const response = await fetch(url);
                    const data = await response.json();
                    setSearchResults(data);
                // Clear search results if no query
                } else {
                    setSearchResults([]);
                }
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();

    }, [query]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSearch = () => {
        setQuery(input);
    }

    const handleResultClick = (result) => {
        setSelectedResult(result);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    if (selectedResult) {
        return (
            <>
                <WeatherMainPage result={selectedResult}/>
            </>
        )
    }

    return (
        <>
            <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"bar bar bar"
                "button .  . "
                " results . . "`,
            }}>
                <Box>
                    <input className='search-bar'
                        sx={{ gridArea: 'bar'}}
                        type="text"
                        placeholder="Search..."
                        value={input} 
                        onChange={handleInputChange}  
                        onKeyDown={handleKeyDown}
                    />
                </Box>
                {/* <Box sx={{ gridArea: 'button'}}>
                    <button className= 'search-button' onClick={handleSearch}>Search</button>
                </Box> */}
                <Box sx={{ gridArea: 'results'}}>
                    <ul>
                        {searchResults.map((result => (
                            <li key={result.lat}>
                                <button className='search-result' onClick={() => handleResultClick(result)}>
                                    {result.name}{result.state ? `, ${result.state}` : ''}, {result.country}
                                </button>
                            </li>
                        )))}
                    </ul>
                </Box>
            </Box>
        </>
    )

}

export default Search;