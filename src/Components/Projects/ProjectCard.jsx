import React from "react";

const ProjectCard = (props) => {
	//Projects array for Recent Projects made.
	const Projects = [
		{
			img: "./src/images/giyu.png",
			title: "Timics Portfolio",
			description: "If a dog chews shoes whose shoes does he choose?",
			link: "hi",
			badges: [
				"VS Code",
				"React.js",
				"Vite",
				"Tailwind CSS",
				"Daisy UI",
				"Vercel",
			],
		},
		{
			img: "./src/images/giyu.png",
			title: "Yes",
			description: "If a dog chews shoes whose shoes does he choose?",
			link: "hi",
			badges: [
				"VS Code",
				"React.js",
				"Vite",
				"Tailwind CSS",
				"Daisy UI",
				"Vercel",
			],
		},
		{
			img: "./src/images/giyu.png",
			title: "No",
			description: "If a dog chews shoes whose shoes does he choose?",
			link: "hi",
			badges: [
				"VS Code",
				"React.js",
				"Vite",
				"Tailwind CSS",
				"Daisy UI",
				"Vercel",
			],
		},
	];

	const badge = Projects[0].badges;

	console.log(badge);

	return (
		<div
			index={props.index}
			className="card w-96 bg-neutral shadow-xl mt-8 mb-16 ml-4"
		>
			<figure>
				<img src={Projects[0]?.img} alt="Shoes" />
			</figure>
			<div className="card-body">
				<div className="card-actions mb-2">
					{Projects[0].badges.map((badge) => (
						<div key={badge} className="badge badge-primary text-secondary">
							{badge}
						</div>
					))}
				</div>
				<h2 className="card-title">{Projects[0]?.title}</h2>
				<p>{Projects[0]?.description}</p>
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
