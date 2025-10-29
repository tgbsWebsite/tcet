import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const dropdowns = {
  "About Us": [
    { name: "About Us", link: "/about/#" },
    { name: "Chairman's Message", link: "/about/chairman" },
    { name: "CEO's Message", link: "/about/ceo" },
    { name: "Principal's Message", link: "/about/#" },
    { name: "Vice Principal's & Director IQAC Message", link: "/about/#" },
    { name: "Dean's(SSW) Message", link: "/about/#" },
    { name: "Dean's(Academic) Message", link: "/about/#" },
    { name: "Institutional Growth", link: "/about/#" },
    { name: "Recognition & Awards", link: "/about/#" },
    { name: "Testimonial", link: "/about/#" },
    { name: "DCDC", link: "#" },
    { name: "NIRF Data", link: "/about/#" },
    { name: "Mandatory Disclosures", link: "#" },
  ],
  Programmes: [
    { name: "Program List", link: "/programmespage" },
    { name: "UG", link: "/programmes/#" },
     { name: "BE", link: "/programmes/#" },
    { name: "MBA", link: "/programmes/#" },
    { name: "Ph.D", link: "/programmes/phd" },
  ],
  Admissions: [
    { name: "Admission Notification", link: "/admission-notification" },
    { name: "Seat Distribution", link: "/seat-distribution" },
    { name: "Fees Structure", link: "/fees-structure" },
  ],
  Academics: [
    { name: "Faculty", link: "/faculty" },
    { name: "Academic Calendar", link: "/academic-calendar" },
  ],
  "Life@TU": [
    { name: "Student Activities", link: "/life-activities" },
    { name: "Facilities", link: "/life-facilities" },
  ],
  NCC: [{ name: "NCC Info", link: "/ncc" }],
  "Web Portals": [
    { name: "ERP Portal", link: "/erp" },
    { name: "Student Portal", link: "/student-portal" },
  ],
  "Contact Us": [
    { name: "Travel Direction", link: "/contact" },
    { name: "Contact Information", link: "/location" },
  ],
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const menuItems = [
    "About Us",
    "Programmes",
    "Admissions",
    "Academics",
    "Life@TU",
    "NCC",
    "Web Portals",
    "Contact Us",
  ];

  return (
    <header className="uni-header">
      <div className="uni-diagonal-bg">
        <div className="uni-container">
          <div className="uni-header-content">
            <div className="uni-logo-section">
              <Link to="/">
                <img
                  src="/Asset 1.svg"
                  alt="University Logo"
                  className="uni-logo-img"
                />
              </Link>
            </div>

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
                    <li>
                      <a href="#" className="uni-nav-link">
                        Faculty
                      </a>
                    </li>
                    <li>
                      <a href="#" className="uni-nav-link">
                        Alumni
                      </a>
                    </li>
                    <li>
                      <a href="#" className="uni-nav-link">
                        Training & Placement
                      </a>
                    </li>
                    <li>
                      <a href="#" className="uni-nav-link">
                        Research & Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="uni-nav-link">
                        Blogs
                      </a>
                    </li>
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
                    {menuItems.map((menu) => (
                      <li
                        key={menu}
                        className="has-dropdown"
                        tabIndex={0}
                        onMouseEnter={() => setOpenDropdown(menu)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        onFocus={() => setOpenDropdown(menu)}
                        onBlur={() => setOpenDropdown(null)}
                        style={{ position: "relative" }}
                      >
                        <a
                          href={`/${menu.replace(/\s/g, '').toLowerCase()}`}
                          className="uni-nav-link-bottom"
                          onClick={(e) => e.preventDefault()}
                        >
                          {menu}
                        </a>
                        {dropdowns[menu] && (
                          <div
                            className="dropdown"
                            style={{
                              display:
                                openDropdown === menu ? "block" : "none",
                              position: "absolute",
                              left: 0,
                              top: "100%",
                              background: "inherit",
                              minWidth: "200px",
                              zIndex: 100,
                            }}
                          >
                            <ul className="dropdown-list">
                              {dropdowns[menu].map((item, idx) => (
                                <li key={item.link + idx}>
                                  <Link
                                    to={item.link}
                                    className="uni-nav-link-bottom"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

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
      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav
          className="uni-nav-bottom-mobile"
          style={{
            background: "inherit",
            position: "absolute",
            top: "100px",
            left: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <ul className="uni-nav-list-bottom" style={{ flexDirection: "column" }}>
            {menuItems.map((menu) => (
              <li key={menu} style={{ position: "relative", width: "100%" }}>
                <button
                  className="mobile-menu-button"
                  onClick={() =>
                    setOpenMobileDropdown(
                      openMobileDropdown === menu ? null : menu
                    )
                  }
                  aria-expanded={openMobileDropdown === menu}
                  aria-controls={`${menu}-submenu`}
                >
                  {menu}
                  <span className="mobile-dropdown-arrow">
                    {openMobileDropdown === menu ? "▲" : "▼"}
                  </span>
                </button>
                {dropdowns[menu] && openMobileDropdown === menu && (
                  <ul
                    id={`${menu}-submenu`}
                    className="mobile-dropdown-list"
                  >
                    {dropdowns[menu].map((item, idx) => (
                      <li key={item.link + idx}>
                        <Link
                          to={item.link}
                          className="uni-nav-link-bottom"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
