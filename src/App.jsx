import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Components/Navbar";

function App() {
	return (
		<>
			<NavBar />
			<button className="btn base-100">Button</button>
			<button className="btn btn-neutral">Neutral</button>
			<button className="btn btn-primary">Primary</button>
			<button className="btn btn-secondary">Secondary</button>
			<button className="btn btn-accent">Accent</button>
		</>
	);
}

export default App;
