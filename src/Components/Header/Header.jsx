import React from "react";
import NavBar from "./Navbar";

const Header = () => {
	return (
		<>
			<header>
				<NavBar />
				<img
					className="banner"
					src="./src/images/jags banner.jpg"
					alt="jaguars banner"
				/>
			</header>
		</>
	);
};

export default Header;
