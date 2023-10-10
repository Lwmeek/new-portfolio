import React from "react";

const Introduction = () => {
	return (
		<div className="hero bg-neutral">
			<div className="hero-content flex-col md:flex-row">
				<img
					src="./src/images/zenitsu.png"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<p>Age: 27</p>
					<p className="py-6">Email: timicivey27@gmail.com</p>
					<p className="py-6">Phone: (386)-631-4549</p>
					<p className="py-6">Location: Jacksonville, Florida, USA</p>
					<button className="btn btn-primary">Resume</button>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
