// import React from 'react'
import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const handelShowLinks = () => {
		setShowLinks(!showLinks); // to check the class nav-bar
	};
	console.log(showLinks);
	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
			<div className="navbar_logo">
				<Link to="/" className="navbar_link_admin">
					Admin Paroisse Orthodoxe Emanuel de Montreuil
				</Link>{" "}
			</div>
			<ul className="navbar_links">
				<div className="dropdown">
					<button className="dropbtn">
						<li className="navbar_item">
							<Link to="#" className="navbar_link_admin">
								CRUD
							</Link>
						</li>
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<Link to="/EditClass">Add Class</Link>
						
						<Link to="/Get">Get and edite</Link>
						<Link to="/Calander">Calander</Link>
					</div>
				</div>
			</ul>
			<ul className="navbar_links">
				<li className="navbar_item">
					<Link to="/Signup" className="navbar_link_admin">
						Signup
					</Link>
				</li>

				<li className="navbar_item">
					<Link to="/Login" className="navbar_link_admin">
						Login
					</Link>
				</li>
			</ul>

			<button className="navbar_burger" onClick={handelShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</nav>
	);
}

export default Nav;
