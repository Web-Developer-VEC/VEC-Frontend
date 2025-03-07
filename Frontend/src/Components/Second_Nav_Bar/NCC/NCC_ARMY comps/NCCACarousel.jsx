import React, { useState, useEffect } from "react";
import "./NCCACarousel.css"; // Import the CSS file

const NCCACarousel = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (isAutoPlay) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isAutoPlay]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data?.carousal_images?.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === data?.carousal_images?.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="ncc-a-carousel-wrap">
            <div className="ncc-a-carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
                {data?.carousal_images?.map((slide, index) => (
                    <div className="ncc-a-carousel-slide" key={index}>
                        <img src={slide} alt={data?.carousal_title[index]} />
                        <div className="ncc-a-carousel-text">
                            <h3>{data?.carousal_title[index]}</h3>
                            <p>{data?.carousal_description[index]}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className="ncc-a-carousel-btn ncc-a-carousel-btn-left" onClick={prevSlide}>&#10094;</button>
            <button className="ncc-a-carousel-btn ncc-a-carousel-btn-right" onClick={nextSlide}>&#10095;</button>

            {/* Dots Indicator */}
            <div className="ncc-a-carousel-dots">
                {data?.carousal_images?.map((_, index) => (
                    <span
                        key={index}
                        className={`ncc-a-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default NCCACarousel;
