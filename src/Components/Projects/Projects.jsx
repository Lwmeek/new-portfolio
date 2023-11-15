import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const [active, setActive] = useState(0);

	const projectTabs = ["Project 1", "Project 2", "Project 3"];

	const handleActiveTab = (index) => {
		setActive(index);
	};
	const handleClass = (index) => {
		return active === index
			? "card w-96 bg-neutral shadow-xl mt-8 mb-16 m-auto block"
			: "card w-96 bg-neutral shadow-xl mt-8 mb-16 m-auto hidden";
	};

	return (
		<section className="p-5 mb-16">
			<h2 className="text-4xl mb-8 underline underline-offset-4">
				Recent Projects
			</h2>
			<div className="tabs justify-center">
				{projectTabs.map((tab, index) => (
					<a
						key={index}
						className={`tab tab-bordered ${
							active === index ? "tab-active" : ""
						}`}
						onClick={() => handleActiveTab(index)}
					>
						{tab}
					</a>
				))}
			</div>
			<div>
				<ProjectCard className={handleClass(0)} id={0} />
				<ProjectCard className={handleClass(1)} id={1} />
				<ProjectCard className={handleClass(2)} id={2} />
			</div>
		</section>
	);
};

export default Projects;
