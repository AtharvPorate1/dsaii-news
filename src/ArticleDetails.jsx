import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './ArticleDetails.css';

const ArticleDetails = () => {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    fetchArticleDetails();
  }, [id]);

  const fetchArticleDetails = async () => {
    try {
      const response = await fetch(`https://newsletter-backend-gnm5.onrender.com/articles/${id}`);
      const data = await response.json();
      
      console.log('Fetched article details:', data);
      // Decode base64 encoded data
      const decodedData = atob(data.data);
      // Update state with decoded data
      setArticleDetails({ ...data, data: decodedData });
    } catch (error) {
      console.error('Error fetching article details:', error);
    }
  };

  if (!articleDetails) {
    return <p>Loading...</p>; // You can render a loading state while fetching data
  }

  return (
    <div className="markDown">
      {/* <h3>{articleDetails.name}</h3>
      <img src={articleDetails.Image} alt="Article Image" /> */}
      <ReactMarkdown>{articleDetails.data}</ReactMarkdown>
    </div>
  );
};

export default ArticleDetails;

