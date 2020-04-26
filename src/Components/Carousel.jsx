import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firstPic from '../assets/1.png'
import secondPic from '../assets/2.png'
import thirdPic from '../assets/3.png'
import fourthPic from '../assets/4.png'
import fifthPic from '../assets/5.png'
import sixthPic from '../assets/6.png'
import seventhPic from '../assets/7.png'
import './Carousel.css'
function CarouselSec() {
    return (
        <div>
            <h2 className='carouselHeader'>Awesome pictures of cats</h2>
            <Carousel className='car' showArrows={true} showThumbs={false} showStatus={false}>
                <div>
                    <img src={seventhPic} alt="" />
                </div>
                <div>
                    <img src={secondPic} alt="" />
                </div>
                <div>
                    <img src={thirdPic} alt="" />
                </div>
                <div>
                    <img src={fourthPic} alt="" />
                </div>
                <div>
                    <img src={fifthPic} alt="" />
                </div>
                <div>
                    <img src={sixthPic} alt="" />
                </div>
                <div>
                    <img src={firstPic} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselSec