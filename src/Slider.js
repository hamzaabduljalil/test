import React, { useState, useEffect } from "react";
import "./Slider.css";

// Import images
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const images = [image1, image2, image3];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change the interval time as needed (e.g., 5000 milliseconds for 5 seconds)
    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? "active" : ""}
        />
      ))}
      <div className="radio-buttons">
        {images.map((image, index) => (
          <label key={index}>
            <input
              className="input"
              type="radio"
              checked={index === currentImageIndex}
              onChange={() => handleRadioChange(index)}
            />
            <span />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Slider;
