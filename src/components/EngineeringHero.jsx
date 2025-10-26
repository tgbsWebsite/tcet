import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./engineering-hero.css";

const carouselData = [
  {
    title: "Under Grad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    cta: "Explore >>",
    color: "#F6BB3F",
    image: "/programming-technical-school.jpg",
    link: "#",
  },
  {
    title: "Post Grad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    cta: "Explore >>",
    color: "#D92329",
    image: "/connecting-people-with-technology.jpg",
    link: "#",
  },
  {
    title: "Ph.D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    cta: "Explore >>",
    color: "#FF6B17",
    image: "/WhatsApp Image 2025-10-25 at 5.26.34 PM.jpeg",
    link: "#",
  },
];

const EngineeringHero = () => {
  return (
    <section className="engv-root">
      {/* Top heading strip */}
      <div className="engv-prog">
        <div className="engv-prog-container">
          <h2 className="tuap-about-title">Our Programmes</h2>
          <div className="cl-title-underline" />
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true, // enables click-to-navigate
        }}
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
                  style={{ backgroundColor: slide.color }}
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
