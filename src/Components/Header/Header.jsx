import React from "react";
import NavBar from "./Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
				<div className="icon-group">
					<a className=" btn btn-sm btn-link text-lg font-bold mb-4">
						<BsGithub className="icon text-base-content" />
					</a>
					<a className=" btn btn-sm btn-link text-lg font-bold">
						<BsLinkedin className="icon text-base-content" />
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
