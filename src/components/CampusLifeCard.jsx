import React from "react";
import "./CampusLifeCard.css";

export default function CampusLifeCard() {
  return (
    <div className="cl-page">
      <div className="cl-card">
        <div className="cl-media">
          <img
            className="cl-media-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPSnUThTQFZngTLQzj9oHOE-zeAagYNVCm2xybUb8aq7t_O4eT-B6howqIEKRs5l350h0TfuFx7j54E3hDBbG4lRzJKElgThPxMkNS5Z-Hl7x1TuKqZdUM4XiMN1f4qtOQ5xdGmLpgWqwTPAc0rcaqbyI-4uNy0gV4NfyUtco4WAna2fvXesV2yqV975JdBqlLAXHT8KCbp5FoEl8SUtCHJLQ7QAuZCLbgmhvFrD38MKWGX125bMDqf42m0QRYy1LS9lRH1kveX24t"
            alt="Students studying in a library"
          />
        </div>

        <div className="cl-content">
          <h2 className="tuap-about-title">Campus Life</h2>
          <div className="cl-title-underline" />
          <p className="cl-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            facilisis diam. Fusce eu nisi porttitor, iaculis nulla sed, sodales
            arcu. Proin maximus sapien ac dui ornare mattis
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
