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
            <video className="tu-hero-video" autoPlay muted loop playsInline>
                <source src="/WhatsApp Video 2025-10-25 at 4.00.15 PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Navbar />

            <div className="tu-hero-content">
                {/* <button
                    className="tu-play-btn"
                    aria-label="Play video"
                    type="button"
                    onClick={onPlayClick}
                />
               */}
                <h1 className="tu-tagline">Legacy Reimagined Future Redefined</h1>
            </div>
        </div>
    );
}
