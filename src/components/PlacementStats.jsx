import React from "react";
import "./PlacementStats.css";

export default function PlacementStats() {
  return (
    <div className="placement-wrapper">
      {/* Placement Stats Section */}
      <div className="placement-hero">
        <div className="placement-overlay"></div>
        <div className="placement-content">
          <h2 className="placement-title">PLACEMENT STATS</h2>
          <div className="cl-title-underline" />

          <div className="placement-stats-grid">
            <div className="placement-stat">
              <span className="placement-number">250+</span>
              <span className="placement-label">Recruiters</span>
            </div>
            <div className="placement-stat">
              <span className="placement-number">100+</span>
              <span className="placement-label">Career Opportunities</span>
            </div>
            <div className="placement-stat">
              <span className="placement-number">40+LPA</span>
              <span className="placement-label">Highest CTC</span>
            </div>
          </div>

          <div className="placement-button-container">
            <button className="spg-wrap spg-button" href="#">
              <span className="spg-input-text">
                MEET OUR STAR RECRUITS HERE
              </span>
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

      {/* Recruiters Section */}
      <div className="recruiters-section">
        <div className="recruiters-container">
          <header className="wtc-header">
            <h1 className="tuap-about-title">Our Recruiters & Collaborators</h1>
            <div className="cl-title-underline" />
          </header>

          <div className="recruiters-grid">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="recruiter-logo-box"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
