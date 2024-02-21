import React from "react";
import { HashLink } from "react-router-hash-link";

const Menu = (props) => {
	/* Nav menu links */
	const { className } = props;
	return (
		<div className={className}>
			<ul className="flex flex-col gap-2 z-[1]">
				<li className="menu-item">
					<HashLink to="#projects">Projects</HashLink>
				</li>
				<li className="menu-item">
					<HashLink to="#contact">Contact Me</HashLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
