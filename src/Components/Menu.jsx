import React from "react";

const Menu = (props) => {
    /* Nav menu links */
	const { className } = props;
	return (
		<div className={className}>
			<ul className="flex flex-col gap-2 z-[1]">
				<li className="menu-item">
					<a>Home</a>
				</li>
				<li className="menu-item">
					<a>Projects</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
