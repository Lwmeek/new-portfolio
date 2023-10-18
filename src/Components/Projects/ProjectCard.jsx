import React from "react";

const ProjectCard = () => {
	return (
		<div className="card w-96 bg-neutral shadow-xl mt-8 mb-16 ml-4">
			<figure>
				<img src="./src/images/giyu.png" alt="Shoes" />
			</figure>
			<div className="card-body">
				<div className="card-actions mb-2">
					<div className="badge badge-primary text-secondary">VS Code</div>
					<div className="badge badge-primary text-secondary">React.js</div>
					<div className="badge badge-primary text-secondary">Vite</div>
					<div className="badge badge-primary text-secondary">Tailwind CSS</div>
					<div className="badge badge-primary text-secondary">Daisy UI</div>
					<div className="badge badge-primary text-secondary">Vercel</div>
				</div>
				<h2 className="card-title">Timic's Portfolio</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">
						<a href="">Go to Project</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
