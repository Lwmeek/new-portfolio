import Certificates from "./Components/Certified/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import ProjectCard from "./Components/Projects/ProjectCard";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
	return (
		<>
			<Header />
			<Introduction />
			<Skills />
			<Projects />
			<ProjectCard/>
			<Certificates />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
