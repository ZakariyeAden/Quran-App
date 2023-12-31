import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import QuranLogo from "../Assets/QuranLogo.png";
function Nav() {
  const user = useSelector(store => store.user);

  return (
    <div className="nav">
      <Link to="/home" className="primary-link">
        <img src={QuranLogo} alt="Quran Logo" width="50" />
        <h2 className="nav-title">Al Quran</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/chapters">
              Home
            </Link>

            <Link className="navLink" to="/plan">
              Plan
            </Link>

            <Link className="navLink" to="/profile">
              Profile
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
