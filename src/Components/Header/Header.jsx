import React from "react";
import NavBar from "./Navbar";
import Quotes from "../Quotes/Quotes";

const Header = () => {
	return (
		<>
			<header className="header">
				<NavBar />
				<img
					className="banner md:max-h-72 lg:max-h-80"
					src="./src/images/jags banner.jpg"
					alt="jaguars banner"
				/>
				<Quotes />
			</header>
		</>
	);
};

export default Header;
