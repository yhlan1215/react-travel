import React from "react";
import { Image, Carousel } from 'antd'
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";
import styled from "styled-components";

const SliderCarousel = styled(Carousel)`
    text-align: center;
    height: 250px;
    line-height: 250px;
    background: #364d79;
    overflow: hidden;
`

export const TravelCarousel = () => {
    return(
        <SliderCarousel autoplay>
            <Image src={carouselImage1}/>
            <Image src={carouselImage2}/>
            <Image src={carouselImage3}/>
        </SliderCarousel>
    )
}