import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './custom-carousel.css';

class MyCarousel extends Component {
    render() {
        return (
            <>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://www.acrylic-glass-photo.co.uk/wp-content/uploads/black-and-white-metal-prints-top.png" alt="Slide 1" />
                        <p className="legend1">Legend 1</p>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://www.acrylic-glass-photo.co.uk/wp-content/uploads/black-and-white-metal-prints-top.png" alt="Slide 2" />
                        <p className="legend1">Legend 2</p>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <div className='image-container-carousel'>
                        <img src="https://www.acrylic-glass-photo.co.uk/wp-content/uploads/black-and-white-metal-prints-top.png" alt="Slide 3" />
                        <p className="legend1">Legend 3</p>
                    </div>
                </div>
            </Carousel>
            </>
        );
    }
}

export default MyCarousel;
