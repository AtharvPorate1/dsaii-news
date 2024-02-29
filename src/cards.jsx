import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './cards.css';
//for prod
const Cards = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('./data/articles.json');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  // Function to truncate the description to the first 50 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.slice(0, 50).join(' ') + '...';
  };

  return (
    <>
      <div className="new">
        {articles.map((article, index) => (
          <Link to={`/article/${index}`} className="container" key={index}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{truncateDescription(article.description)}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
