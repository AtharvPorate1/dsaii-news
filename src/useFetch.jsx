// Assume you have articles.json file
import React, { useState, useEffect } from 'react';
import News from './News'; // Assuming News component is in the same directory

const App = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch data from your JSON file
        fetch('articles.json')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>News Channel</h1>
            <News articles={articles} />
        </div>
    );
}

export default App;
