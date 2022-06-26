import React from "react";
import MLogo from "../../assets/MBoard.svg";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="mboard__navbar">
      <div className="mboard__navbar-logo">
				<img src={MLogo} alt="Logo"/>
			</div>
			<div className="mboard__navbar-links">
				<ul>
					<li id="signin"><a href="google.com">Sign in</a></li>
					<li id="signup"><a href="google.com">Sign up</a></li>
				</ul>
			</div>
    </div>
  );
};

export default Navbar;
