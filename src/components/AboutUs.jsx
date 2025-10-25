import React, { useEffect, useRef, useState } from "react";
import "./aboutProgrammes.tu.css";

export default function AboutProgrammesTU() {
 const stats = [
    { number: "0+", label: "Schools", highlighted: true },
    { number: "5311+", label: "Students on Campus", highlighted: false },
    { number: "200+", label: "Faculty", highlighted: true },
    { number: "2764+", label: "Yearly Intake", highlighted: false },
    { number: "0+", label: "Strength", highlighted: true },
    { number: "37+", label: "Courses", highlighted: false }
  ];

  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* About Section */}
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text-section">
            <h1 className="about-main-title">About TCET-U (Proposed)</h1>
            <h2 className="about-subtitle">Sub Header</h2>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent lup.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-image-section">
            <img
              src="/WhatsApp Image 2025-10-25 at 3.46.12 PM.jpeg"
              alt="University Campus"
              className="about-image"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider">
          <div className="about-divider-line"></div>
        </div>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`about-stat-card ${
                  stat.highlighted ? "about-stat-highlighted" : ""
                }`}
              >
                <p className="about-stat-number">{stat.number}</p>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}