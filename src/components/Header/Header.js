import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header_" onClick={() => window.scroll(0, 0)}>
      <span>Movie@vunet</span>
    </div>
  );
}

export default Header;
