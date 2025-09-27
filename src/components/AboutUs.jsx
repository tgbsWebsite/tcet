import React, { useEffect, useRef, useState } from "react";
import "./aboutProgrammes.tu.css";

export default function AboutProgrammesTU() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const wrapperRef = useRef(null);
  const statsRef = useRef(null);
  const autoTimerRef = useRef(null);
  const scrollListenerRef = useRef(null);

  // Indicators state control
  const indicators = Array.from({ length: totalSlides }, (_, i) => i);

  // Update transform when slide changes
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(-${currentSlide * 20}%)`;
    }
  }, [currentSlide]);

  // Auto-advance carousel every 4s
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    autoTimerRef.current = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % totalSlides);
    }, 4000);
  };

  const stopAuto = () => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  const nextSlide = () => setCurrentSlide((s) => (s + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + totalSlides) % totalSlides);
  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    startAuto();
  };

  // Scroll-based navigation when section in view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        nextSlide();
      }
    };

    const addScrollListener = () => {
      if (scrollListenerRef.current) return;
      scrollListenerRef.current = handleScroll;
      el.addEventListener("wheel", handleScroll, { passive: false });
    };

    const removeScrollListener = () => {
      if (!scrollListenerRef.current) return;
      el.removeEventListener("wheel", scrollListenerRef.current);
      scrollListenerRef.current = null;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) addScrollListener();
          else removeScrollListener();
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      removeScrollListener();
      observer.disconnect();
    };
  }, []);

  // Pause auto on hover
  const onMouseEnter = () => stopAuto();
  const onMouseLeave = () => startAuto();

  // Touch/swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].screenX;
    const dist = endX - touchStartX.current;
    const threshold = 50;
    if (Math.abs(dist) > threshold) {
      if (dist > 0) prevSlide();
      else nextSlide();
      startAuto();
    }
  };

  return (
    <>
      {/* Hero */}
      <div className="tuap-hero" />

      {/* About Us */}
      <section className="tuap-about">
        <div className="tuap-container">
          <h2 className="tuap-about-title">About Us</h2>
            <div className="cl-title-underline" />
          <p className="tuap-subhdr">Sub Header</p>
          <p className="tuap-about-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus asperiores minus, nobis consequatur tempore distinctio nihil velit officia quae officiis sint facilis vitae quia mollitia rerum repudiandae maxime saepe iste, reiciendis itaque animi nesciunt rem? Rerum, non nesciunt fugit, reprehenderit saepe nobis corporis ratione facilis maxime consequuntur impedit possimus esse, necessitatibus iure. Voluptas dolorem quia sit quaerat nam harum temporibus id minima veritatis possimus dicta, modi officia? Eos mollitia similique molestiae nisi pariatur deleniti beatae aut cum cumque labore, ducimus quod, soluta odit tempore voluptates velit optio libero repudiandae, totam tenetur aspernatur ut dolore quo dolor? Sed quasi commodi fugit.
          </p>
          {/* <div className="cl-title-underline" /> */}
        </div>
      </section>

      {/* Stats + Carousel */}
      {/* <section
        className="tuap-stats"
        ref={statsRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="tuap-container">
          <div className="tuap-stats-wrap">
            <div className="tuap-carousel">
              <div className="tuap-carousel-track" ref={wrapperRef}>
                <div className="tuap-card">
                  <div className="tuap-icon" role="img" aria-label="Industry">🏭</div>
                  <div className="tuap-card-content">
                    <div className="tuap-num">5</div>
                    <div className="tuap-text">Engineering<br />Programmes</div>
                  </div>
                </div>
                <div className="tuap-card">
                  <div className="tuap-icon" role="img" aria-label="Business">💼</div>
                  <div className="tuap-card-content">
                    <div className="tuap-num">3</div>
                    <div className="tuap-text">Business<br />Programmes</div>
                  </div>
                </div>
                <div className="tuap-card">
                  <div className="tuap-icon" role="img" aria-label="Technology">💻</div>
                  <div className="tuap-card-content">
                    <div className="tuap-num">4</div>
                    <div className="tuap-text">Technology<br />Programmes</div>
                  </div>
                </div>
                <div className="tuap-card">
                  <div className="tuap-icon" role="img" aria-label="Design">🎨</div>
                  <div className="tuap-card-content">
                    <div className="tuap-num">2</div>
                    <div className="tuap-text">Design<br />Programmes</div>
                  </div>
                </div>
                <div className="tuap-card">
                  <div className="tuap-icon" role="img" aria-label="Research">🔬</div>
                  <div className="tuap-card-content">
                    <div className="tuap-num">6</div>
                    <div className="tuap-text">Research<br />Programmes</div>
                  </div>
                </div>
              </div>

              <button className="tuap-nav tuap-prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
              <button className="tuap-nav tuap-next" onClick={nextSlide} aria-label="Next slide">›</button>

              <div className="tuap-indicators" role="tablist" aria-label="Carousel Indicators">
                {indicators.map((i) => (
                  <span
                    key={i}
                    className={`tuap-indicator ${currentSlide === i ? "active" : ""}`}
                    onClick={() => goToSlide(i)}
                    role="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={currentSlide === i ? "true" : "false"}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") goToSlide(i); }}
                  />
                ))}
              </div>
            </div>

            <div className="tuap-stat-purple">
              <div className="tuap-right">
                <div className="tuap-right-num">1250</div>
                <div className="tuap-right-text">Students on<br />Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Programmes heading */}
      {/* <section className="tuap-programmes">
        <div className="tuap-container">
          <h2 className="tuap-prog-title">Our Programmes</h2>
          <div className="tuap-prog-line" />
        </div>
      </section> */}

      {/* Bottom image */}
      {/* <div className="tuap-bottom" /> */}
    </>
  );
}
