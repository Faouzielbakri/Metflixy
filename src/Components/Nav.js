import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import metflixy from "../media/metflixy.png";
//

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
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
          onClick={() => {
            history.push("/");
          }}
          src={metflixy}
          alt="netflix log"
          className="nav__logo"
        />

        <img
          onClick={() => {
            history.push("/profile");
          }}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-0BnHB516am5JeNaMXxKiELOd7fDzo0qvKUj0sJA=s32-c-mo"
          alt="img avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
