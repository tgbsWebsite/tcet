import React from "react";

import "./hero.css";
import Navbar from "./navbar";

export default function HeroTU() {
    const onPlayClick = (e) => {
        const el = e.currentTarget;
        el.style.transform = "scale(0.95)";
        setTimeout(() => { el.style.transform = "scale(1)"; }, 150);
    };

    return (
        <div className="tu-hero">
            <Navbar />

            <div className="tu-hero-content">
                <button
                    className="tu-play-btn"
                    aria-label="Play video"
                    type="button"
                    onClick={onPlayClick}
                />
                <p className="tu-video-text">Video here on the slider</p>
                <h1 className="tu-tagline">TAGLINE</h1>
            </div>
        </div>
    );
}
