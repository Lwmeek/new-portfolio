import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";

const Contact = () => {
	return (
		<>
			<section className="contact p-4">
				<h2 className="text-4xl mb-6 underline underline-offset-4">
					Contact Me!
				</h2>
				<form className="flex flex-col gap-2">
					<label htmlFor="fullName">Full Name:</label>
					<input className="w-3/5" type="text" name="fullName" id="fullName" />

					<label htmlFor="email">Email:</label>
					<input className="w-3/5" type="email" name="email" id="email" />

					<label htmlFor="subject">Subject:</label>
					<input className="w-3/5" type="text" name="subject" id="subject" />

					<label htmlFor="message">Message:</label>
					<textarea
						className="w-4/5"
						name="message"
						id="message"
						cols="30"
						rows="10"
					></textarea>

					<button className="btn btn-primary w-28" type="submit">
						Send
						<BsRocketTakeoff />
					</button>
				</form>
			</section>
		</>
	);
};

export default Contact;
