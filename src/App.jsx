import Certificates from "./Components/Certified/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
	return (
		<>
		<BrowserRouter>
			<Header />
			
			<div className="flex flex-col lg:flex-row items-start">
				<Skills />
				<Certificates />
			</div>
			<Projects />
			<Contact />
			<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
