import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="uni-header">
      <div className="uni-diagonal-bg">
        <div className="uni-container">
          <div className="uni-header-content">
            {/* Logo and Title Section */}
            <div className="uni-logo-section">
              <Link to="/">
                <img
                  src="/Asset 1.svg"
                  alt="University Logo"
                  className="uni-logo-img"
                />
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="uni-nav-section">
              <div className="uni-nav-wrapper">
                {/* Top Navigation */}
                <nav className="uni-nav-top">
                  <ul className="uni-nav-list">
                    <li>
                      <a
                        href="https://thakureducation.org/"
                        className="uni-nav-link"
                      >
                        TEG
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Faculty
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Alumni
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Training & Placement
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Research & Development
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Blogs
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link">
                        Careers
                      </a>
                    </li>

                    <li>
                      <a href="#" className="uni-apply-btn">
                        Apply Now
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* Bottom Navigation */}
                <nav className="uni-nav-bottom">
                  <ul className="uni-nav-list-bottom">
                    <li>
                      <a href="/about" className="uni-nav-link-bottom">
                        About Us
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="/programmespage" className="uni-nav-link-bottom">
                        Programmes
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        Admissions
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        Academics
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        Life@TU
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        NCC
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        Web Portals
                      </a>
                    </li>
                    {/* <li><span className="uni-nav-divider">|</span></li> */}
                    <li>
                      <a href="#" className="uni-nav-link-bottom">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Hamburger Menu */}
              {/* Hamburger Menu */}
              <div className="uni-menu-toggle">
                <button
                  className="uni-hamburger-btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                >
                  <img
                    src="/menu.svg"
                    alt="Menu"
                    className="uni-hamburger-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
