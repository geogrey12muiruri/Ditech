import React from 'react';
import './Carousel.css'; // Assuming you will create a CSS file for custom styles
import slideImage from '../assets/services/slide1.jpg'; // Assuming you will create a folder for images
import slideImage2 from '../assets/services/klt.jpg'; // Assuming you will create a folder for images
import slideImage3 from '../assets/services/mws.jpg'; // Assuming you will create a folder for images
import slideImage4 from '../assets/services/spe.jpg'; // Assuming you will create a folder for images
import slideImage5 from '../assets/services/nwmps.jpg'; // Assuming you will create a folder for images

const images = [
  {
    src: {slideImage},
    alt: "Image 1",
    caption: "Caption for Image 1"
  },
  {
    src: {slideImage2},
    alt: "Image 2",
    caption: "Kisumu long term action project"
  },
  {
    src: {slideImage3},
    alt: "Image 3",
    caption: "Mororgoro water supply project"
  },
  {
    src: {slideImage4},
    alt: "Image 4",
    caption: "Sunrise Park Estate"
  },

  {
    src: {slideImage5},
    alt: "Image 5",
    caption: "Nairobi water Distribution Master Plan"
  }
];

const Carousel = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out ${
              index === 0 ? 'block' : 'hidden'
            }`}
            data-carousel-item
          >
            <img
              src={image.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={image.alt}
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Previous button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
