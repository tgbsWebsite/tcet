// src/components/EngineeringHero.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./engv-hero.css";

const carouselData = [
  {
    title: "Under Grad",
    description:
      "Our undergraduate programs foster creativity, critical thinking, and practical learning, preparing students to excel and become confident professionals in their chosen fields.",
    cta: "Explore >>",
    color: "#F6BB3F",
    image: "/programming-technical-school.jpg",
    link: "#",
  },
  {
    title: "Post Grad",
    description:
      "Our postgraduate programs deepen intellectual understanding, inspire innovative research, and develop the expertise needed to make lasting contributions to academia, industry, and society.",
    cta: "Explore >>",
    color: "#D92329",
    image: "/educated-student-classroom.jpg",
    link: "#",
  },
  {
    title: "Ph.D",
    description:
      "Our doctoral programs foster original research, advanced analytical thinking, and academic excellence, empowering scholars to expand the frontiers of knowledge and innovation.",
    cta: "Explore >>",
    color: "#FF6B17",
    image: "/WhatsApp Image 2025-10-25 at 5.26.34 PM.jpeg",
    link: "#",
  },
];

const EngineeringHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="engv-root">
      {/* Top heading strip */}
      <div className="engv-prog">
        <div className="engv-prog-container">
          <h2 className="engv-prog-title">Our Programmes</h2>
          <div className="engv-prog-line" />
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={700}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="engv-hero"
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="engv-hero">
              <img
                className="engv-hero-img"
                src={slide.image}
                alt={slide.title}
              />
              <div className="engv-hero-scrim" />
              <div className="engv-hero-content">
                <article
                  className="engv-card"
                  style={{
                    backgroundColor: slide.color,
                    opacity: activeIndex === index ? 1 : 0.7,
                    transform:
                      activeIndex === index ? "scale(1)" : "scale(0.95)",
                    transition: "transform 700ms ease, opacity 700ms ease",
                  }}
                >
                  <h1 className="engv-title">{slide.title}</h1>
                  <p className="engv-text">{slide.description}</p>
                  <a href={slide.link} className="engv-cta">
                    {slide.cta}
                  </a>
                </article>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EngineeringHero;
