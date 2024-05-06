import { useEffect, useState } from 'react'
import Article from './Article'
import '../styles/News.css'
import { Box, grid } from '@mui/system';

const News = () => {

    const API_KEY = import.meta.env.VITE_NYT_KEY;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?");
                url.searchParams.append("api-key", API_KEY);
                const response = await fetch(url);
                const data = await response.json();
                setResults(data.results.slice(0,5));
                console.log(results);
            }
            catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();
    }, [])

    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {results.map(( article ) => {
                    return (
                        <div key={article.title}>
                            <Article article={article}/>
                        </div>
                    )
                })}
            </Box>
        </>
    )
}

export default News