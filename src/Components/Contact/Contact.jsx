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
				<h2 className="text-4xl underline underline-offset-4 mb-2">
					Send Me Your Energy!
				</h2>
				<p className="mb-6">
					📩 Send a Email to Connect with me and I will reply as soon as
					possible.😁
				</p>
				<div className="lg:flex justify-between">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col gap-2 mb-16 lg:basis-2/3"
					>
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
							className="w-5/6 border border-neutral text-neutral lg:w-full"
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
					<div className="goku-spiritBomb flex flex-col items-center mb-10">
						<div className="rasengan">
							<div className="line line1"></div>
							<div className="line line2"></div>
							<div className="line line3"></div>
							<div className="line line4"></div>
							<div className="line line5"></div>
							<div className="line line6"></div>
							<div className="line line7"></div>
							<div className="line line8"></div>
							<div className="line line9"></div>
							<div className="line line10"></div>
							<div className="line line11"></div>
							<div className="line line12"></div>
							<div className="line line13"></div>
							<div className="line line14"></div>
							<div className="line line15"></div>
							<div className="line line16"></div>
							<div className="line line17"></div>
							<div className="line line18"></div>
							<div className="line line19"></div>
							<div className="line line20"></div>
							<div className="line line21"></div>
							<div className="line line22"></div>
							<div className="line line23"></div>
							<div className="line line24"></div>
							<div className="line line25"></div>
							<div className="line line26"></div>
							<div className="line line27"></div>
							<div className="line line28"></div>
							<div className="line line29"></div>
							<div className="line line30"></div>
							<div className="line line31"></div>
							<div className="line line32"></div>
							<div className="line line33"></div>
							<div className="line line34"></div>
							<div className="line line35"></div>
							<div className="line line36"></div>
							<div className="line line37"></div>
							<div className="line line38"></div>
							<div className="line line39"></div>
							<div className="line line40"></div>
							<div className="line line41"></div>
							<div className="line line42"></div>
							<div className="line line43"></div>
							<div className="line line44"></div>
							<div className="line line45"></div>
							<div className="line line46"></div>
							<div className="line line47"></div>
							<div className="line line48"></div>
							<div className="line line49"></div>
							<div className="line line50"></div>
							<div className="line line51"></div>
							<div className="line line52"></div>
							<div className="line line53"></div>
							<div className="line line54"></div>
							<div className="line line55"></div>
							<div className="line line56"></div>
							<div className="line line57"></div>
							<div className="line line58"></div>
							<div className="line line59"></div>
							<div className="line line60"></div>
							<div className="line line61"></div>
							<div className="line line62"></div>
							<div className="line line63"></div>
							<div className="line line64"></div>
							<div className="line line65"></div>
							<div className="line line66"></div>
							<div className="line line67"></div>
							<div className="line line68"></div>
							<div className="line line69"></div>
							<div className="line line70"></div>
							<div className="line line71"></div>
							<div className="line line72"></div>
							<div className="line line73"></div>
							<div className="line line74"></div>
							<div className="line line75"></div>
							<div className="line line76"></div>
							<div className="line line77"></div>
							<div className="line line78"></div>
							<div className="line line79"></div>
							<div className="line line80"></div>
							<div className="line line81"></div>
							<div className="line line82"></div>
							<div className="line line83"></div>
							<div className="line line84"></div>
							<div className="line line85"></div>
							<div className="line line86"></div>
							<div className="line line87"></div>
							<div className="line line88"></div>
							<div className="line line89"></div>
							<div className="line line90"></div>
							<div className="line line91"></div>
							<div className="line line92"></div>
							<div className="line line93"></div>
							<div className="line line94"></div>
							<div className="line line95"></div>
							<div className="line line96"></div>
							<div className="line line97"></div>
							<div className="line line98"></div>
							<div className="line line99"></div>
							<div className="line line100"></div>
						</div>
						<div>
							<img
								src="./src/images/goku crop.png"
								alt="goku spirit bomb"
								className="w-64 mt-6"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
