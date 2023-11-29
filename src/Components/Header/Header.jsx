import React from "react";
import NavBar from "./Navbar";
import Quotes from "../Quotes/Quotes";

const Header = () => {
	return (
		<>
			<header className="header">
				<NavBar />
				<img
					className="banner"
					src="./src/images/jags banner.jpg"
					alt="jaguars banner"
				/>
				<Quotes />
			</header>
		</>
	);
};

export default Header;
