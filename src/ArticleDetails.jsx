// ArticleDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles.json' // Import the JSON file

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Simulate fetching article from an API
        const response = await fetch('./articles.json'); // Assuming articles.json is served from the public directory
        const data = await response.json();
        const articleData = data.find(item => item.id === parseInt(id));
        setArticle(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleDetail;
