import React, { useState } from "react";
import { RiMenuUnfoldFill, RiCloseLine } from 'react-icons/ri'
import MLogo from "../../assets/MBoard.svg";

import "./navbar.css";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const toggleHandler = () => {
    setToggleMenu(toggleMenu => !toggleMenu)
  }

  return (
    <div className="mboard__navbar">
      <div className="mboard__navbar-logo">
				<img src={MLogo} alt="Logo"/>
			</div>
			<div className="mboard__navbar-links">
				<ul>
					<li id="signin"><a href="google.com">Login</a></li>
					<li id="signup"><a href="google.com">Sign up</a></li>
				</ul>
			</div>

			<div className="mboard__navbar-menu">
				{toggleMenu 
				? <RiCloseLine color='#fff' size={27} onClick={toggleHandler} /> 
				: <RiMenuUnfoldFill color='#fff' size={27} onClick={toggleHandler} /> 
				}
				{toggleMenu && 
					<div className="mboard__navbar-menu-links scale-up-center">
						<ul>
							<li id="signin"><a href="google.com">Login</a></li>
							<li id="signup"><a href="google.com">Sign up</a></li>
						</ul>
					</div>
				}
			</div>
    </div>
  );
};

export default Navbar;
