import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<section className="bg-neutral pt-8 pb-8">
			<h1 className="text-secondary text-3xl text-center mb-6">
				Timic's Portfolio
			</h1>
			<div className="grid grid-cols-2 gap-3 justify-items-center mb-6">
				<p className="badge badge-primary text-secondary">JavaScript/ JSX</p>
				<p className="badge badge-primary text-secondary">React.js</p>
				<p className="badge badge-primary text-secondary">
					Daisy UI/ Tailwind CSS
				</p>
				<p className="badge badge-primary text-secondary">Vite</p>
				<p className="badge badge-primary text-secondary">VS Code</p>
				<p className="badge badge-primary text-secondary">Vercel</p>
			</div>
			<div className="text-center mb-4">
				<a className="btn btn-xs btn-link text-3xl font-bold mr-4">
					<BsGithub className="icon text-secondary" />
				</a>
				<a className="btn btn-xs btn-link text-3xl font-bold">
					<BsLinkedin className="icon text-secondary" />
				</a>
			</div>
			<div className="text-center">
				<p className="text-secondary">
					&copy; 2023 Created by and for Timic Ivey, All rights reserved
				</p>
			</div>
		</section>
	);
};

export default Footer;
