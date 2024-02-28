import React, { useState, useEffect } from 'react';
import './cards.css';

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

  return (
    <>
      <div className="new">
        {articles.map((article, index) => (
          <a href="#" className="container" key={index}>
            <img src={article.image} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}

export default Cards;
