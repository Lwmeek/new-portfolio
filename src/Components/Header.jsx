import React from "react";
import NavBar from "./Navbar";
import { BsGithub } from "react-icons/bs";

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
                <BsGithub/> GitHub
			</header>
		</>
	);
};

export default Header;
