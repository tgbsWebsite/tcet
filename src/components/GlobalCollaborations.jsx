import React, { useState } from "react";
import "./globalCollaborations.css";

export default function GlobalCollaborations() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Diverse Academic Programmes",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTklkzSPDpP-Rl_pOCs-edMvHMgmwTyrmPphCIxXfDICpK0BH-rVseMu9oRWqJQb56Pln374CW7oZ8ksZJfccSl4DoMM4isxkYjeXIGwE8Utxd-XQjm3IWahBbQrJkQTHoR2WL6CWpHC1BS-M-v-ohGdH59s-jpfc2oFLMtQuQDdP7fvCvqm71dHl9T9ZOtLrG3kEHj9svxkkRcp8pTJTyycrTeoPUr2b_MK6GIQo5bw50DH03zh6LGtgPGGGX6VsFTG7Ieq2T6fU"
    },
    {
      title: "Holistic Development",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=860&h=520&fit=crop"
    },
    {
      title: "Strong Industry Connect",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=860&h=520&fit=crop"
    },
    {
      title: "World‑Class Infrastructure",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=860&h=520&fit=crop"
    },
    {
      title: "Industry‑Aligned Curriculum",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=860&h=520&fit=crop"
    },
    {
      title: "Vibrant Campus Life",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=860&h=520&fit=crop"
    },
    {
      title: "Vibrant Campus Life",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=860&h=520&fit=crop"
    }
  ];

  return (
    <main className="gc-main">
              <header className="wtc-header">
          <h1 className="tuap-about-title">Why TCET University?</h1>
          <div className="cl-title-underline" />
        </header>
      <div className="gc-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`gc-tab ${activeTab === index ? "gc-tab-active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {/* Collapsed State (Sidebar) */}
            <div className="gc-tab-collapsed">
              <span className="gc-icon-toggle">
                {activeTab === index ? "−" : "+"}
              </span>
              <h3 className="gc-tab-title">{tab.title}</h3>
            </div>

            {/* Expanded State (Card) */}
            <div className="gc-tab-expanded">
              <img
                src={tab.image}
                alt={tab.title}
                className="gc-card-image"
              />
              <div className="gc-card-overlay"></div>
              <div className="gc-card-content">
                <div className="gc-line-indicator"></div>
                <h1 className="gc-card-title">{tab.title}</h1>
                <p className="gc-card-description">{tab.description}</p>
                <a href="#" className="gc-view-more-btn">
                  <span>VIEW MORE</span>
                  <span className="gc-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
