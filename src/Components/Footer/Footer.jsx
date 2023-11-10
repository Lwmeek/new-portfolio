import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<section className="bg-neutral pt-8 pb-8">
			<div className="text-center mb-4">
				<a className="btn btn-xs btn-link text-lg font-bold mr-4">
					<BsGithub className="icon text-secondary" />
				</a>
				<a className="btn btn-xs btn-link text-lg font-bold">
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
