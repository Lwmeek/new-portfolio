import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Menu from "./Menu";

const ExpandMenu = () => {
	/* Expand menu logic */
	const [isExpanded, setExpanded] = useState(false);

	const handleExpand = () => setExpanded(!isExpanded);

	return (
		<>
			<button className="btn btn-ghost menu-btn text-accent" onClick={handleExpand}>
				{isExpanded ? (
					<AiOutlineClose fontSize={25} />
				) : (
					<BiMenuAltRight fontSize={33} />
				)}
			</button>
			<div>
				{isExpanded ? (
					<Menu className="menu rounded-lg bg-base-100 p-3 w-40 show" />
				) : (
					<Menu className="menu rounded-lg bg-base-100 p-3 w-40" />
				)}
			</div>
		</>
	);
};

export default ExpandMenu;
