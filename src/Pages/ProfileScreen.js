import React from "react";
import "./ProfileScreen.css";
import Nav from "./../Components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";
import { auth } from "../firebase";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const currentplan = "none";
  return (
    <div className="profilescreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="profileScreen__img"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>{`Plans (current Plan ${currentplan})`}</h3>
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profileScreen__signout"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
