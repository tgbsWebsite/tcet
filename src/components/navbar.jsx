import React, { useEffect, useRef } from "react";
import "./navbar.css";

export default function Navbar() {
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const menu = menuRef.current;

    const onDocClick = (e) => {
      if (!hamburger || !menu) return;
      if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        hamburger.classList.remove("tu-hamburger-active");
        menu.classList.remove("tu-navmenu-active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    };

    const onResize = () => {
      if (window.innerWidth > 768 && hamburger && menu) {
        hamburger.classList.remove("tu-hamburger-active");
        menu.classList.remove("tu-navmenu-active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    };

    document.addEventListener("click", onDocClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleMenu = () => {
    // Disabled toggle functionality for now
    // const hamburger = hamburgerRef.current;
    // const menu = menuRef.current;
    // if (!hamburger || !menu) return;
    // hamburger.classList.toggle("tu-hamburger-active");
    // menu.classList.toggle("tu-navmenu-active");
    // const expanded = hamburger.classList.contains("tu-hamburger-active");
    // hamburger.setAttribute("aria-expanded", expanded ? "true" : "false");
  };

  return (
    <div>
      <header className="tu-navbar-wrap">
        <nav className="tu-navbar" style={{ marginRight: "30px" }}>
          <div className="tu-logo">University Logo</div>

          <div className="tu-right-cluster">
            <ul className="tu-nav-menu" ref={menuRef}>
              <li>
                <a href="#">TEG</a>
              </li>
              <li>
                <a href="#">Faculty</a>
              </li>
              <li>
                <a href="#">Alumni</a>
              </li>
              <li>
                <a href="#">Training &amp; Placement</a>
              </li>
              <li>
                <a href="#">Research &amp; Development</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
            <a className="tu-apply-btn" href="#">
              APPLY NOW
            </a>
          </div>
        </nav>
        <div>
          <button
            ref={hamburgerRef}
            className="tu-hamburger tu-hamburger-center"
            aria-label="Toggle menu"
            aria-expanded="false"
            onClick={toggleMenu}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="tu-secondary-nav">
          <a href="#">About Us</a>
          <a href="#">Programmes</a>
          <a href="#">Admissions</a>
          <a href="#">Academics</a>
          <a href="#">Life @ TU</a>
          <a href="#">NCC</a>
          <a href="#">Web Portals</a>
          <a href="#">Contact Us</a>
        </div>
      </header>
    </div>
  );
}
