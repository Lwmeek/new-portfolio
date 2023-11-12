import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
	const [active, setActive] = useState(1);

	const handleActiveTab = (index) => {
		setActive(index);
	};
	console.log(active);

	return (
		<section className="p-5 mb-16">
			<h2 className="text-4xl mb-8 underline underline-offset-4">
				Recent Projects
			</h2>
			<div className="tabs">
				<a
					className={`tab tab-bordered ${active === 1 ? "tab-active" : ""}`}
					onClick={() => handleActiveTab(1)}
				>
					Project 1
				</a>

				<a
					className={`tab tab-bordered ${active === 2 ? "tab-active" : ""}`}
					onClick={() => handleActiveTab(2)}
				>
					Project 2
				</a>
				<a
					className={`tab tab-bordered ${active === 3 ? "tab-active" : ""}`}
					onClick={() => handleActiveTab(3)}
				>
					Project 3
				</a>
			</div>
		</section>
	);
};

export default Projects;
