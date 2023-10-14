import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
	BiLogoJavascript,
	BiLogoReact,
	BiSolidArrowFromLeft,
} from "react-icons/bi";

const Certificates = () => {
	return (
		<section className="certificates p-4">
			<h1 className="text-4xl mb-6">Certifications</h1>
			<div className="flex gap-2 items-center">
				<AiFillHtml5 className="text-2xl" />
				<h2>HTML/CSS</h2>
				<a
					className="ml-8 text-secondary"
					href="https://drive.google.com/file/d/1dYal5ygVHz31zcq53eleJdYNysCvVDU0/view?usp=sharing"
				>
					Certificate
				</a>
				<BiSolidArrowFromLeft className="text-secondary" />
			</div>
			<div className="flex gap-2 items-center">
				<BiLogoJavascript className="text-2xl" />
				<h2>JavaScript</h2>
				<a
					className="ml-8 text-secondary"
					href="https://drive.google.com/file/d/1ryiCS3DwPiGs98UC2kArvVHU8xh7Mkp5/view?usp=sharing"
				>
					Certificate
				</a>
				<BiSolidArrowFromLeft className="text-secondary" />
			</div>
			<div className="flex gap-2 items-center">
				<BiLogoReact className="text-2xl" />
				<h2>ReactJs</h2>
				<a
					className="ml-8 text-secondary"
					href="https://drive.google.com/file/d/1wZEhlAg74MJIsXpHNZs36LmSjx2BoxgJ/view?usp=sharing"
				>
					Certificate
				</a>
				<BiSolidArrowFromLeft className="text-secondary" />
			</div>
		</section>
	);
};

export default Certificates;
