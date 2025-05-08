import { useState, useEffect } from "react";
import { Link } from "react-router";
import { heroSlides } from "../utils/data";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = heroSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-slider">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2 className="heading">{slide.title}</h2>
            <p>{slide.description}</p>
            <Link to="/services"><button className="btn">Explore Services</button></Link>
          </div>
        </div>
      ))}
      <div className="arrows">
        <button className="arrow" onClick={prevSlide}>❮</button>
        <button className="arrow" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default HeroSlider;