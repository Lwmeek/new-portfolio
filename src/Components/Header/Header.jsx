import React from "react";
import NavBar from "./Navbar";
import Quotes from "../Quotes/Quotes";
import Introduction from "../Introduction/Introduction";

const Header = () => {
	return (
		<>
			<header className="header">
				<NavBar />
				<Introduction />
			</header>
		</>
	);
};

export default Header;
