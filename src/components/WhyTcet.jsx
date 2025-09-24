import React from "react";
import "./WhyTcet.css";

const features = [
  {
    title: "World-Class Faculty",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non facilisis diam. Integer ultrices sem ut erat porta, nec laoreet lacus interdum.",
  },
  {
    title: "Innovative Research",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat augue vitae lectus molestie, at viverra nibh semper.",
  },
  {
    title: "Vibrant Campus Life",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id nunc ac velit cursus efficitur vitae in risus.",
  },
  {
    title: "Global Network",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut sapien sed odio convallis laoreet a a ligula.",
  },
  {
    title: "State-of-the-Art Facilities",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus turpis nec mi posuere, a tempus nisl pulvinar.",
  },
  {
    title: "Career Success",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tortor at ipsum vulputate bibendum non a justo.",
  },
];

export default function WhyTcet() {
  return (
    <section className="wtc-section">
      <div className="wtc-container">
        <header className="wtc-header">
          <h1 className="tuap-about-title">Why TCET University?</h1>
          <div className="cl-title-underline" />
        </header>

        <div className="wtc-grid">
          {features.map((f, idx) => (
            <article key={idx} className="wtc-card">
              <h2 className="wtc-card-title">{f.title}</h2>
              <p className="wtc-card-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
