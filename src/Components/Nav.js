import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitonNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitonNavBar);
    return () => window.removeEventListener("scroll", transitonNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="netflix log"
          className="nav__logo"
        />

        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-0BnHB516am5JeNaMXxKiELOd7fDzo0qvKUj0sJA=s32-c-mo"
          alt="img avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
