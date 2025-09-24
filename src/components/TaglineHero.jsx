import React from "react";
import "./TaglineHero.css";

export default function TaglineHero() {
  return (
    <section className="th-hero">
      <div className="th-hero-box">
        <img
          className="th-hero-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUCCz8BmvK-a98IHb4yINYjnioJenqm2VcOe4FM6UMw1OTDsVieWYH5HFTgO51aVWosC3gWkRi0QwXBouqw_1_O00i-PjPdyM4BwDByqx-6VjvuW7HvDcYaZi9NoSwNpD3vtkquBmhoPKgcnbIcqf2ujlKwbg6VmnP3UnxNDApMzBB4APsJDGNI9oQie-o9x53FA1rSEZJNwM9dLKIMIu866zBUvw-6nn2eweTp7LWdMkInb17q30yEvkUXpWoaTFHerr3gCn-ZUtf"
          alt="Group of people collaborating"
          loading="lazy"
        />
        <div className="th-hero-overlay">
          <h1 className="th-hero-title">TAGLINE</h1>
        </div>
      </div>
    </section>
  );
}
