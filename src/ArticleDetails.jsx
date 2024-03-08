// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

// const ArticleDetail = () => {
//   const { index } = useParams();
//   const [articles, setArticles] = useState([]);
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://newsletter-backend-gnm5.onrender.com/articles');
//         const articlesData = await response.json();
//         console.log('Fetched articles:', articlesData); 
//         setArticles(articlesData);

//         // Use the index parameter to get the corresponding article
//         const articleIndex = parseInt(index, 10);
//         const foundArticle = articlesData[articleIndex];

//         if (foundArticle) {
//           setArticle(foundArticle);
//         } else {
//           console.error('Invalid article index:', index);
//         }
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//       }
//     };

//     fetchData();
//   }, [index]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   // Decode Base64 binary data and set it as inner HTML
//   const decodedContent = atob(article.data);

//   // Strip the .md format from the article title
//   const strippedTitle = article.title.replace(/\.md$/, '');

//   return (
//     <div className="article-detail">
//       <img src={`https://newsletter-backend-gnm5.onrender.com/${article.Image}`} alt={strippedTitle} />
//       <h2>{strippedTitle}</h2>
//       {/* Use dangerouslySetInnerHTML to render HTML content */}
//       <ReactMarkdown children={decodedContent} />
//     </div>
//   );
// };

// export default ArticleDetail;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
  const { index } = useParams();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      const response = await fetch('https://newsletter-backend-gnm5.onrender.com/articles');
      const articlesData = await response.json();
      console.log('Fetched articles:', articlesData); 
      //   let settedArticles = articlesData;
      //   console.log("This is inside the console" , articlesData);
      //   setArticles(articlesData);
      

      //   // Use the index parameter to get the corresponding article
      //   const articleIndex = parseInt(index, 10);
      //   const foundArticle = articlesData[articleIndex];

      // //   if (foundArticle) {
      // //     setArticle(foundArticle);
      // //   } else {
      // //     console.error('Invalid article index:', index);
      // //   }
      // // } catch (error) {
      //   console.error('Error fetching articles:', error);
      //  }
    };

    fetchData();
  }, [index]);

  if (!article) {
    return <div>Loading...</div>;
  }

  // Decode Base64 binary data and set it as inner HTML
  const decodedContent = atob(article.data);

  // Display the decoded content as plain text
  const strippedTitle = article.name.replace(/\.md$/, '');


  return (
    <div className="article-detail">
      {/* <img src={article.Image} alt={strippedTitle} /> */}
      {/* <h2>{strippedTitle}</h2> */}
      <h1>
        {articlesData}
      </h1>
      {/* Display the decoded content as plain text */}
      {/* <p>{decodedContent}</p> */}
    </div>
  );
};

export default ArticleDetails;
