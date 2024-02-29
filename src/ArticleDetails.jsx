// ArticleDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles.json'; // Import the JSON file

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Find the article from the imported JSON data
    const articleData = articles.find(item => item.id === parseInt(id));
    setArticle(articleData);
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
