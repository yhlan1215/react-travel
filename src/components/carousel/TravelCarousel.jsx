import React from "react";
import { Image, Carousel } from 'antd'
import './TravelCarousel.css'
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";

export const TravelCarousel = () => {
    return(
        <Carousel className="slider" autoplay>
            <Image src={carouselImage1}/>
            <Image src={carouselImage2}/>
            <Image src={carouselImage3}/>
        </Carousel>
    )
}