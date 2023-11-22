import React from "react";
import { ProjectsArr } from "../../assets/Useful Data/ProjectArr";

const ProjectCard = ({ className, id}) => {
	return (
		<div className={className}>
			<figure>
				<img src={ProjectsArr[id]?.img} alt="project thumbnail" />
			</figure>
			<div className="card-body">
				<div className="card-actions mb-2">
					{ProjectsArr[id].badges.map((badge) => (
						<div key={badge} className="badge badge-primary text-secondary">
							{badge}
						</div>
					))}
				</div>
				<h2 className="card-title text-accent">{ProjectsArr[id]?.title}</h2>
				<p className="text-accent">{ProjectsArr[id]?.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">
						<a href={ProjectsArr[id]?.link}>Go to Project</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
