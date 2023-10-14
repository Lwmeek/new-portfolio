import React from "react";

const Introduction = () => {
	return (
		<section className="hero mb-8">
			<div className="hero-content flex-col md:flex-row">
				<img
					src="./src/images/zenitsu.png"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<section className="intro p-4">
					I'm <span>Timic Ivey</span> a self-taught frontend developer certified
					in HTML/CSS/JavaScript, React.js, and currently learning SASS and
					Vue.js. I love gaming and watching sports in my free time while
					balancing it with my passion for evolving the skills of my craft,
					frontend development.
				</section>
				<div className="grid grid-cols-2 items-center justify-items-center">
					<p>
						<span>Age:</span> 27
					</p>
					<p className="py-6">
						<span>Location:</span> Jacksonville, Florida, USA
					</p>
					<p className="py-6">
						<span>Email:</span> timicivey27@gmail.com
					</p>
					<p className="py-6">
						<span>Phone:</span> (386)-631-4549
					</p>

					<button className="btn btn-primary col-span-2 w-56 justify-self-center">
						<a href="https://drive.google.com/file/d/1rlGYG_5dgM9XSwJKd29ysvfcKdgKPOc5/view?usp=drive_link">
							Download Resume
						</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
