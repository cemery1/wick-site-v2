/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCarousel.js

    Creator Card Carousel
*/

import React from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';

import CreatorCard from '../../pattern_library/cards/CreatorCard.js';

import '../../scss_styles/WickCarousel.scss';

const WickCarousel = ({activeIndex, content, next, previous, onExiting, onExited}) => {
    const slides = (content.map(card => (
        <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={card.username}
        >
            <CreatorCard {...card} />
        </CarouselItem>
    )));

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {slides}
            <CarouselControl className="WickCarousel-arrowLeft" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className="WickCarousel-arrowRight" direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

export default WickCarousel;