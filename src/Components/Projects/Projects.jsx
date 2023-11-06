import React from "react";

const Projects = () => {
	return (
		<section className="p-5 mb-16">
			<h2 className="text-4xl mb-8 underline underline-offset-4">
				Recent Projects
			</h2>
			<div className="tabs bg-neutral">
				<a className="tab tab-lifted">Project 1</a>
				<a className="tab tab-lifted tab-active">Project 2</a>
				<a className="tab tab-lifted">Project 3</a>
			</div>
		</section>
	);
};

export default Projects;
