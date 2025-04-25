import "./Navigation.css"

import { useState } from "react";

import logo from "Assets/logo.svg"

function Navigation() {

	const [scroll, setScroll] = useState(true);
	document.addEventListener("DOMContentLoaded", (e) => {
		setScroll(false);
	})
	document.addEventListener("scroll", (e) => {
		setScroll(window.scrollY > 15)
	})

	return (
		<nav className={"nav" + (scroll ? " nav-scroll" : "")}>
			<a href="/" className={"logo nav-button" + (scroll ? " nav-button-light" : " nav-button-dark")}>
				<img src={logo} alt="React.js Logo" className="logo" />
				<p className="logo">Carslo_45</p>
			</a>
			<ul className="nav-menu">
				<li><a href="/Projects" className={"nav-button" + (scroll ? " nav-button-light" : " nav-button-dark")}>Projects</a></li>
				<li><a href="/About" className={"nav-button" + (scroll ? " nav-button-light" : " nav-button-dark")}>About Me</a></li>
				<li><a href="/Contact" className={"nav-button" + (scroll ? " nav-button-light" : " nav-button-dark")}>Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navigation;
