import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const Cards = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://newsletter-backend-gnm5.onrender.com/articles');
      const data = await response.json();
      console.log(data);
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const stripMdExtension = (fileName) => {
    return fileName.replace('.md', '');
  };

  const truncateDescription = (description) => {
    if (description) {
      const words = description.split(' ');
      return words.slice(0, 50).join(' ') + '...';
    }
    return '';
  };

  return (
    <>
      <div className="new">
        {articles.map((article) => {
          const encodedData = article.data;
          const decodedData = atob(encodedData);

          return (
            <div key={article._id} className="container">
              <Link to={`/article/${article._id}`}>
                <img src={article.Image} alt="Article Image" />
                <h3>{stripMdExtension(article.name)}</h3>
                <div className="description">
                <p>{truncateDescription(decodedData)}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
