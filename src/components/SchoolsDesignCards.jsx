// SchoolsDesignCards.jsx
import React, { useState, useMemo, useCallback } from "react";
import "./schoolsDesignCards.css";

export default function SchoolsDesignCards() {
  // 1) Carousel data
  const items = useMemo(
    () => [
      {
        id: "schools",
        primaryFace: (
          <>
            <div className="sdc_numberDisplay">0+</div>
            <div className="sdc_schoolsText">Schools</div>
          </>
        ),
        swapFace: (
          <>
            <div className="sdc_futureNumber">0+</div>
            <div className="sdc_futureText">
              Future Ready<br />Programmes
            </div>
          </>
        ),
        underlayFace: (
          <>
            <div className="sdc_futureNumber">0+</div>
            <div className="sdc_futureText">
              Future Ready<br />Programmes
            </div>
          </>
        ),
      },
      {
        id: "studentsOnCampus",
        primaryFace: (
          <>
            <div className="sdc_numberDisplay">0</div>
            <div className="sdc_schoolsText">
              <span>Students on</span> <span>Campus</span>
            </div>
          </>
        ),
        swapFace: (
          <>
            <div className="sdc_futureNumber">0</div>
            <div className="sdc_futureText">
              International<br />Collaborations
            </div>
          </>
        ),
      },
      {
        id: "faculty",
        primaryFace: (
          <>
            <div className="sdc_numberDisplay">0</div>
            <div className="sdc_schoolsText">Faculty</div>
          </>
        ),
        swapFace: (
          <>
            <div className="sdc_futureNumber">0</div>
            <div className="sdc_futureText">
              Research<br />Projects
            </div>
          </>
        ),
      },
    ],
    []
  );

  // 2) Carousel index and per-slide swapped flags
  const [index, setIndex] = useState(0);
  const [swappedById, setSwappedById] = useState({});

  const active = items[index];
  const swapped = !!swappedById[active.id];

  const next = useCallback(
    () => setIndex(i => (i + 1) % items.length),
    [items.length]
  );
  const prev = useCallback(
    () => setIndex(i => (i - 1 + items.length) % items.length),
    [items.length]
  );
  const goTo = useCallback(
    i => setIndex(((i % items.length) + items.length) % items.length),
    [items.length]
  );

  const toggleSwap = useCallback(() => {
    setSwappedById(map => ({
      ...map,
      [active.id]: !map[active.id],
    }));
  }, [active?.id]);

  // 3) Keyboard support
  const onKeyDown = useCallback(
    e => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    },
    [next, prev]
  );

  if (!active) return null;

  // NEW: derive the "next card" to act as the second card after swap
  const nextItem = items[(index + 1) % items.length];

  return (
    <div
      className={`sdc_body ${swapped ? "sdc_swapOn" : ""}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Statistics carousel"
    >
      <div className="sdc_container">
        <div className="sdc_cardsWrap">
          {/* FIRST CARD keeps same element and classes so styling is identical */}
          <div className="sdc_schoolsCard">
            <div className="sdc_iconSection">
              <div className="sdc_buildingGroup">
                <div className="sdc_buildingSide1"></div>
                <div className="sdc_buildingMain"></div>
                <div className="sdc_buildingSide2"></div>
                <div className="sdc_buildingSmall"></div>
                <div className="sdc_arrowUp"></div>
                <div className="sdc_arrowStem"></div>
              </div>
              <div className="sdc_decorationDots">
                <div className="sdc_dot"></div>
                <div className="sdc_dot"></div>
                <div className="sdc_dot"></div>
                <div className="sdc_dot"></div>
                <div className="sdc_dot"></div>
              </div>
              <div className="sdc_decorationLines">
                <div className="sdc_line"></div>
                <div className="sdc_line"></div>
                <div className="sdc_line"></div>
                <div className="sdc_line"></div>
              </div>
            </div>

            {/* Faces: second face moved inside first card to adopt identical CSS */}
            {!swapped ? active.primaryFace : active.swapFace}
          </div>

          {/* SECOND CARD logic:
              - When not swapped: behave as before (use active.underlayFace or swapFace)
              - When swapped: show the NEXT card's face so it acts as the second card */}
          <div
            className="sdc_futureCard"
            aria-hidden={false}
            style={swapped ? undefined : undefined}
          >
            {swapped
              ? (nextItem?.primaryFace ?? nextItem?.swapFace ?? active.swapFace)
              : (active.underlayFace ?? active.swapFace)}
          </div>
        </div>

        {/* Controls */}
        {/* <div className="sdc_controls">
          <button className="sdc_navBtn" onClick={prev} aria-label="Previous slide">
            ‹
          </button>

          <button className="sdc_swapTrigger" onClick={toggleSwap}>
            Swap
          </button>

          <button className="sdc_navBtn" onClick={next} aria-label="Next slide">
            ›
          </button>
        </div> */}

        <div className="sdc_dots" role="tablist" aria-label="Slides">
          {items.map((it, i) => (
            <button
              key={it.id}
              role="tab"
              aria-selected={i === index}
              aria-controls={`sdc_slide_${it.id}`}
              className={`sdc_dotBtn ${i === index ? "isActive" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
