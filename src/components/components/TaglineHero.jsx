import React from "react";
import "./TaglineHero.css";

export default function TaglineHero() {
  return (
    <section className="th-hero">
      <div className="th-hero-box">
        <img
          className="th-hero-img"
          src="/Tagline.png"
          alt="Group of people collaborating"
          loading="lazy"
        />
        <div className="th-hero-overlay">
          <h1 className="th-hero-title">TCET – Where Learning Inspires Leadership.</h1>
        </div>
      </div>
    </section>
  );
}
