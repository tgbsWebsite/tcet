import React from "react";
import "./accreditation.css";

export default function Accreditation() {
    return (
        <div className="heading">
            <header className="wtc-header">
                <h1 className="tuap-about-title">Awards & Accreditations</h1>
                <div className="cl-title-underline" />
            </header>

            <div className="acc-wrapper">

                <div className="acc-container">

                    <div className="acc-grid">
                        {/* NAAC Grade Section */}
                        <div className="acc-naac-section">
                            <div className="acc-naac-content">

                                <div className="acc-naac-logo">
                                    <img
                                        src="/NAAC@4x.png"
                                        alt="NBA Logo"
                                        className="acc-nba-image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* NAAC Award Box */}
                        <div className="acc-award-box">
                            <div className="acc-award-content">
                                <p className="acc-award-text">
                                    Awarded "A" Grade by NAAC w.e.f. 30-10-2017
                                </p>
                            </div>
                        </div>

                        {/* NBA Section */}
                        <div className="acc-nba-section">
                            <div className="acc-nba-wrapper">
                                <div className="acc-nba-box">
                                    <p className="acc-nba-text">
                                        NBA Accreditation Letters 5th Cycle (In Progress)
                                    </p>
                                </div>
                                {/* NBA Logo Image */}
                                <div className="acc-nba-logo">
                                    <img
                                        src="/nba-logo-new blue.png"
                                        alt="NBA Logo"
                                        className="acc-nba-image"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* UGC Section */}
                        <div className="acc-ugc-section">
                            <div className="acc-ugc-wrapper">
                                {/* Diamond Badges */}
                                <div className="acc-diamonds">
                                    <div className="acc-diamond-item">
                                        {/* NBA Logo Image */}


                                    </div>
                                    {/* NBA Logo Image */}
                                    <div className="acc-nba-logo">
                                        <img
                                            src="/Asset 1@4x.png"
                                            alt="NBA Logo"
                                            className="acc-nba-image"
                                        />
                                    </div>
                                </div>

                                {/* UGC Info Box */}
                                <div className="acc-ugc-box">
                                    <p className="acc-ugc-text">
                                        Inclusion under Section 2(f) &amp; 12(B) Conferment of
                                        Autonomous Status
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
