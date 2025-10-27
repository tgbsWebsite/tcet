import React from "react";
import "./CampusLifeCard.css";

export default function CampusLifeCard() {
  return (
    <div className="cl-page">
      <div className="cl-card">
        <div className="cl-media">
          <img
            className="cl-media-img"
            src="/img.jpeg"
            alt="Students studying in a library"
          />
        </div>

        <div className="cl-content">
          <h2 className="tuap-about-title">Campus Life</h2>
          <div className="cl-title-underline" />
          <p className="cl-description">
            The campus features modern infrastructure that supports an engaging environment for teaching, learning, and research, reflecting the standards of a truly world-class institute. It also offers state-of-the-art facilities and comfortable hostels for outstation students.
          </p>

          <button className="spg-wrap spg-button" href="#">
            <span className="spg-input-text">Explore</span>
            <img
              className="spg-icon"
              src="/src/assets/arrow_right.svg"
              alt="Arrow forward"
              loading="lazy"
              width="20"
              height="20"
              aria-hidden="true"
            />
          </button>

        </div>
      </div>
    </div>
  );
}
