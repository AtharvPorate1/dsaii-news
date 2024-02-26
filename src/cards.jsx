import React, { useState } from 'react';


const Card = ({ dataImage, children }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - e.currentTarget.offsetLeft - width / 2);
    setMouseY(e.pageY - e.currentTarget.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={(el) => {
        if (el) {
          setWidth(el.offsetWidth);
          setHeight(el.offsetHeight);
        }
      }}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">
          {children}
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div id="app" className="container">
      {/* <h1 className="title">Hover over the cards</h1> */}
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1>Canyons</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1>Canyons</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1>Canyons</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1>Canyons</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Card>
      {/* Add more Card components as needed */}
    </div>
  );
};

export default Cards;
