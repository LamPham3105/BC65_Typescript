// import React, { useState } from "react";
// import bg1 from "../../assets/User/images/bg_1.jpg";
// import bg2 from "../../assets/User/images/bg_2.jpg";
// import Booking from "./Booking";
// import "../../assets/User/css/Carousel.css";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [bg1, bg2];
//   const captions = [
//     { title: "Welcome To Deluxe", subtitle: "Hotels & Resorts" },
//     { title: "Enjoy A Luxury Experience", subtitle: "Join With Us" },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide">
//       <div className="carousel-inner">
//         {images.map((image, index) => (
//           <div
//             className={`carousel-item ${
//               currentIndex === index ? "active" : ""
//             }`}
//             key={index}
//           >
//             <img
//               src={image}
//               className="d-block w-100"
//               alt={`Slide ${index + 1}`}
//               style={{ height: 800 }}
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h1>{captions[index].title}</h1>
//               <h2>{captions[index].subtitle}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#carouselExampleIndicators"
//         role="button"
//         onClick={prevSlide}
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#carouselExampleIndicators"
//         role="button"
//         onClick={nextSlide}
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </a>
//     </div>
//   );
// };

const Carousel = () => {
  return (
    <section className="home-slider owl-carousel owl-theme">
      <div
        className="slider-item"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-12 ftco-animate text-center">
              <div className="text mb-5 pb-3">
                <h1 className="mb-3">Welcome To Deluxe</h1>
                <h2>Hotels &amp; Resorts</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="slider-item"
        style={{ backgroundImage: "url(images/bg_2.jpg)" }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-12 ftco-animate text-center">
              <div className="text mb-5 pb-3">
                <h1 className="mb-3">Enjoy A Luxury Experience</h1>
                <h2>Join With Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
