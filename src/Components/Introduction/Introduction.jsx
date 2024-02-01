import React from "react";

const Introduction = () => {
	return (
		<section className="hero mb-8 overflow-hidden">
			<div className="hero-content flex-col md:flex-row p-0">
				<img
					src="./src/images/zenitsu.png"
					className="rounded-lg shadow-2xl"
				/>
				<section className="intro p-4">
					<h1 className="text-4xl mb-8">
						What makes You <span>Different ?</span>
					</h1>
					<p>
						You might see a lot of candidates saying they are passionate about
						frontend development but are they passionate about being the best
						they can possibly be? I love criticism, I love knowing there is a
						more faster, effective, efficient way to do a task on top of being
						passionate about improving. I love knowing the “meta” or “trends” in
						the industry that is the best way to do something like a video game.
						I pay very close attention to details because as a frontend engineer
						the smallest thing can make a huge difference. I don’t only want to
						make a career change but I want to be apart of something, a team
						that has each others back and helps each other grow to reach a
						common goal as well as their personal goals. I'm {""}
						<span>Timic Ivey</span> a self-taught frontend developer certified
						in HTML/CSS/JavaScript, React.js, and currently learning Vue.js. I
						love gaming and watching sports in my free time while balancing it
						with my passion for evolving the skills of my craft, frontend
						development.
					</p>
				</section>
				<div className="grid grid-cols-2 items-center justify-items-center">
					<p>
						<span>Age:</span> 27
					</p>
					<p className="py-6">
						<span>Location:</span> Jacksonville, Florida, USA
					</p>
					<p className="py-6 col-span-2">
						<span>Email:</span> timicivey27@gmail.com
					</p>
					<p className="py-6 col-span-2">
						<span>Phone:</span> (386)-631-4549
					</p>

					<button className="btn btn-primary col-span-2 w-56 justify-self-center">
						<a href="https://drive.google.com/file/d/1rlGYG_5dgM9XSwJKd29ysvfcKdgKPOc5/view?usp=drive_link">
							See & Download Resume
						</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
