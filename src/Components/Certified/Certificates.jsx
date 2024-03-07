import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
	BiLogoJavascript,
	BiLogoReact,
	BiSolidArrowFromLeft,
} from "react-icons/bi";

const Certificates = () => {
	return (
		<section className="certificates mb-16 flex flex-col gap-5 md:max-w-lg m-auto lg:mt-0">
			<h2 className="text-4xl mb-6 underline underline-offset-4">
				Certifications
			</h2>
			<div className="flex gap-5 items-center justify-between w-4/5">
				<div className="flex gap-2">
					<AiFillHtml5 className="text-2xl" />
					<h2>HTML/CSS</h2>
				</div>
				<div className="flex gap-2 items-center">
					<a
						className="text-secondary hover:opacity-70 flex gap-2 items-center"
						href="https://drive.google.com/file/d/1dYal5ygVHz31zcq53eleJdYNysCvVDU0/view?usp=sharing"
					>
						<p>Certificate</p>
						<BiSolidArrowFromLeft className="text-secondary mt-1" />
					</a>
				</div>
			</div>
			<div className="flex gap-5 items-center justify-between w-4/5">
				<div className="flex gap-2">
					<BiLogoJavascript className="text-2xl" />
					<h2>JavaScript</h2>
				</div>
				<div className="flex gap-2 items-center">
					<a
						className="text-secondary hover:opacity-70 flex gap-2 items-center"
						href="https://drive.google.com/file/d/1ryiCS3DwPiGs98UC2kArvVHU8xh7Mkp5/view?usp=sharing"
					>
						<p>Certificate</p>
						<BiSolidArrowFromLeft className="text-secondary mt-1" />
					</a>
				</div>
			</div>
			<div className="flex gap-5 items-center justify-between w-4/5">
				<div className="flex gap-2">
					<BiLogoReact className="text-2xl" />
					<h2>ReactJs</h2>
				</div>
				<div className="">
					<a
						className="text-secondary hover:opacity-70 flex gap-2 items-center"
						href="https://drive.google.com/file/d/1wZEhlAg74MJIsXpHNZs36LmSjx2BoxgJ/view?usp=sharing"
					>
						<p>Certificate</p>
						<BiSolidArrowFromLeft className="text-secondary mt-1" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Certificates;
