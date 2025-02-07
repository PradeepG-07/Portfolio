import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Timeline from "./components/Timeline";

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Toaster />
			<Header />
			<main className="overflow-hidden">
				<Hero />
				<Services />
				<About />
				<Projects />
				<Timeline />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;

