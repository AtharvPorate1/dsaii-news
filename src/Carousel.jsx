import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './custom-carousel.css';

const CarouselComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('./data/carousel.json');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        {articles.map((article, index) => (
          <div className='carousel-slide' key={index}>
            <div className='image-container-carousel'>
              <img src={article.image} alt={`Slide ${index + 1}`} />
              <p className="legend1">{article.legend}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselComponent;