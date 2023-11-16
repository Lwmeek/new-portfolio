import Certificates from "./Components/Certified/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import Quotes from "./Components/Quotes/Quotes";
import Skills from "./Components/Skills/Skills";
import React from "react";

function App() {
	
	
	return (
		<>
			<Header />
			<Quotes />
			<Introduction />
			<Skills />
			<Projects/>
			<Certificates />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
