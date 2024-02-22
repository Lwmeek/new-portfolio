import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsRocketTakeoff } from "react-icons/bs";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_lvz23nm", "template_okxbazi", form.current, {
				publicKey: "9yP_Mvm7nfbSUisxr",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<>
			<section className="contact p-4 md:pl-10 lg:max-w-5xl" id="contact">
				<h2 className="text-4xl mb-6 underline underline-offset-4">
					Contact Me Quickly!
				</h2>
				<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
					<label htmlFor="fullName">Full Name:</label>
					<input
						className="w-3/5 border border-neutral text-neutral"
						type="text"
						name="fullName"
						id="fullName"
					/>

					<label htmlFor="email">Email:</label>
					<input
						className="w-3/5 border border-neutral text-neutral"
						type="email"
						name="email"
						id="email"
					/>

					<label htmlFor="subject">Subject:</label>
					<input
						className="w-3/5 border border-neutral text-neutral"
						type="text"
						name="subject"
						id="subject"
					/>

					<label htmlFor="message">Message:</label>
					<textarea
						className="w-4/5 border border-neutral text-neutral"
						name="message"
						id="message"
						cols="30"
						rows="10"
					></textarea>

					<button className="btn btn-primary w-28" type="submit" value="Send">
						Send
						<BsRocketTakeoff />
					</button>
				</form>
			</section>
		</>
	);
};

export default Contact;
