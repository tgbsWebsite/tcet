import React from "react";
import "./accreditation.css";

export default function Accreditation() {
    return (
        <div className="acc-page">
            {/* Header outside the main container */}
            <header className="acc-page-header">
                <h1 className="acc-page-title">Awards & Accreditations</h1>
                <div className="acc-title-underline" />
            </header>

            {/* Main content container */}
            <div className="acc-content-wrapper">
                {/* Row 1: NAAC Section */}
                <div className="acc-row">
                    <div className="acc-logo-box">
                        <img
                            src="/NAAC@4x.png"
                            alt="NAAC Accredited Grade A"
                            className="acc-logo-img"
                        />
                    </div>
                    <div className="acc-info-box">
                        <p className="acc-info-text">
                            Awarded "A" Grade by NAAC w.e.f. 30-10-2017
                        </p>
                    </div>
                </div>

                {/* Row 2: NBA Section */}
                <div className="acc-row">
                    <div className="acc-info-box">
                        <p className="acc-info-text">
                              NBA Accreditation Letters 5th Cycle (In Progress)
                        </p>
                    </div>
                    <div className="acc-logo-box">
                        <img
                            src="/nba-logo-new blue.png"
                            alt="NBA Logo"
                            className="acc-logo-img"
                        />
                    </div>
                </div>

                {/* Row 3: UGC/Autonomous Section */}
                <div className="acc-row">
                    <div className="acc-logo-box">
                        <img
                            src="/Asset 1@4x.png"
                            alt="Section 2(f) and 12(B)"
                            className="acc-logo-img"
                        />
                    </div>
                    <div className="acc-info-box">
                        <p className="acc-info-text">
                            Inclusion under Section 2(f) & 12(B) Conferment of Autonomous Status
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
