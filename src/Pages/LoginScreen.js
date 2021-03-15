import React, { useState } from "react";
import "./LoginScreen.css";
import Signup from "../Components/Signup";
import metflixy from "../media/metflixy.png";
import { useHistory } from "react-router";

function LoginScreen() {
  const [signin, setSignin] = useState(false);
  const [email, setemail] = useState("");
  const history = useHistory();
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src={metflixy}
          alt="netflix log"
          className="loginScreen__logo"
          onClick={() => history.push("/")}
        />
        <button
          variant="contained"
          className="loginScreen__button"
          onClick={() => setSignin(true)}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signin ? (
          <Signup emailaddress={email} />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSignin(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <button className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
