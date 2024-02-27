import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './custom-carousel.css';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" alt="Slide 1" />
                        <p className="legend1">Legend 1</p>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" alt="Slide 2" />
                        <p className="legend1">Legend 2</p>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=" alt="Slide 3" />
                        <p className="legend1">Legend 3</p>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default MyCarousel;
