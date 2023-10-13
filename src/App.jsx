import Certificates from "./Components/Certified/Certificates";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/skills";

function App() {
	return (
		<>
			<Header />
			<Introduction />
			<Skills />
			<Projects />
			<Certificates />
			<Footer />
		</>
	);
}

export default App;
