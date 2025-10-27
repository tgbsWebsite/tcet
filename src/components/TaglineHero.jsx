import React from "react";
import "./TaglineHero.css";

export default function TaglineHero() {
  return (
    <section className="th-hero">
      <div className="th-hero-box">
        <img
          className="th-hero-img"
          src="/tagline.jpeg"
          alt="Group of people collaborating"
          loading="lazy"
        />
        <div className="th-hero-overlay">
          <h1 className="th-hero-title">TCET-Excellence in Education. Innovation in Thought. Leadership in Action.</h1>
        </div>
      </div>
    </section>
  );
}
