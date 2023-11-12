import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
	const [active, setActive] = useState(1);

	const projectNumbers = ["Porject 1", "Project 2", "Project 3"];

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
				{projectNumbers.map((project, index) => (
					<a
					className={`tab tab-bordered ${active === index ? "tab-active" : ""}`}
					onClick={() => handleActiveTab(index)}
				>{project}</a>
				))}
			</div>
		</section>
	);
};

export default Projects;
