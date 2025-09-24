// src/components/EngineeringHero.jsx
import React, { useEffect, useRef, useState } from "react";
import "./engineering-hero.css";

const carouselData = [
    {
        title: "Engineering & Technology",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        cta: "Explore >>",
        color: "#1F2937",
        link: "#",
    },
    {
        title: "Vocational Courses",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        cta: "Explore >>",
        color: "#8B2635",
        link: "#",
    },
    {
        title: "Computer Applications",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        cta: "Explore >>",
        color: "#6B46C1",
        link: "#",
    },

    {
        title: "Management",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
        cta: "Explore >>",
        color: "#059669",
        link: "#",
    },
];

const EngineeringHero = () => {
    const [current, setCurrent] = useState(0);
    const [auto, setAuto] = useState(true);
    const autoTimer = useRef(null);
    const resumeTimer = useRef(null);

    const next = () => setCurrent((p) => (p + 1) % carouselData.length);
    const goTo = (i) => {
        setCurrent(i);
        setAuto(false);
        clearInterval(autoTimer.current);
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setAuto(true), 10000);
    };

    useEffect(() => {
        if (auto) {
            autoTimer.current = setInterval(next, 4000);
        }
        return () => clearInterval(autoTimer.current);
    }, [auto]);

    useEffect(() => () => clearTimeout(resumeTimer.current), []);

    return (
        <section className="engv-root">
            {/* Top heading strip */}
            <div className="engv-prog">
                <div className="engv-prog-container">
                    <h2 className="tuap-about-title">Our Programmes</h2>
                    <div className="cl-title-underline" />
                </div>
            </div>

            {/* Hero with background image + scrim */}
            <div className="engv-hero">
                <img
                    className="engv-hero-img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOYhr5RE_b-7K-ZBYFlvSVZCg-EbawmWzNbgevXMlxHbvpTigPokAKsVk7VaAVoGvlMz1Nyk1ojeCosFAUK0HKRVb8SzB3MWXB8uHrYS9dU4sg6t2M_wbSj7scXHQVxvLTVBwhwCzeRbbjlTjh9LVQIXJeMfZtqsYTW7p5RHqPd0ULbh0P7AEhM2PpslV994asH2NIKYzbkL7wVTFmwa_KIZted_NV5ZGc-owHOQLUbDBWi-Bk0vwjort1-es5UlP4Pc0IzTcYYRtQ"
                    alt="Students collaborating and laughing while working on laptops"
                />
                <div className="engv-hero-scrim" />

                {/* Foreground card that changes color/content */}
                <div className="engv-hero-content">
                    <article
                        className="engv-card"
                        style={{ backgroundColor: carouselData[current].color }}
                    >
                        <h1 className="engv-title">{carouselData[current].title}</h1>
                        <p className="engv-text">{carouselData[current].description}</p>
                        <a className="engv-cta" href={carouselData[current].link}>
                            {carouselData[current].cta}
                        </a>
                    </article>

                    {/* Dots */}
                    <div className="engv-dots" role="tablist" aria-label="Hero slides">
                        {carouselData.map((_, i) => (
                            <button
                                key={i}
                                className={`engv-dot ${current === i ? "is-active" : ""}`}
                                role="tab"
                                aria-selected={current === i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineeringHero;
