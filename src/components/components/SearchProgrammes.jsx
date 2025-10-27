import React from "react";
import "./SearchProgrammes.css";

export default function SearchProgrammes() {
  const handleClick = () => {
    alert("Search clicked!"); // replace with actual search logic
  };

  return (
    <div className="spg-page">
      <button className="spg-wrap spg-button" type="button" onClick={handleClick}>
        <span className="spg-input-text">SEARCH PROGRAMMES HERE</span>
        <img
          className="spg-icon"
          src="/src/assets/arrow_right.svg"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
