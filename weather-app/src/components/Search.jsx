import { useEffect, useState } from 'react';
import WeatherMainPage from './WeatherMainPage'

const Search = () => {

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

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
                    // console.log(searchResults);
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

    if (selectedResult) {
        return (
            <>
                <WeatherMainPage result={selectedResult}/>
            </>
        )
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={input} 
                onChange={handleInputChange}    
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((result => (
                    <li key={result.name}><button onClick={() => handleResultClick(result)}>{result.name}, {result.country}</button></li>
                )))}
            </ul>
        </>
    )

}

export default Search;