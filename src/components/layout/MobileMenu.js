import React, { useState } from "react";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button className="MobileButton" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      {isMenuOpen && (
        <div className="MobileLinks">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="">About</a>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;