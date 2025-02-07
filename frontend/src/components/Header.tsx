import Icon from "./Icon";
import { motion } from "framer-motion";
const Header = () => {
	function openNavbar() {
		document
			.getElementById("mobile-nav")
			?.classList.remove("-translate-y-full");
	}
	function closeNavbar() {
		document
			.getElementById("mobile-nav")
			?.classList.add("-translate-y-full");
	}
	return (
		<header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-300">
			<motion.div
				className="container mx-auto px-4 py-4"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<nav className="flex justify-between items-center">
					<a href="#" className="text-xl font-bold">
						Golla<span className="text-indigo-600"> Pradeep </span>
						Kumar
					</a>

					<div className="hidden md:flex space-x-8">
						<a href="#services" className="hover:text-indigo-600">
							Services
						</a>
						<a href="#about" className="hover:text-indigo-600">
							About
						</a>
						<a href="#projects" className="hover:text-indigo-600">
							Projects
						</a>
						{/* TODO: If possible add Testimonials later */}
						<a href="#timeline" className="hover:text-indigo-600">
							Timeline
						</a>
						<a href="#skills" className="hover:text-indigo-600">
							Skills
						</a>
					</div>

					<a
						href="#contact"
						className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
					>
						Contact
					</a>

					<button className="md:hidden" onClick={openNavbar}>
						<Icon name="menu" className="w-6 h-6" />
					</button>
				</nav>
			</motion.div>
			<div
				className="bg-indigo-600 absolute top-0
       left-0 w-full transition-all md:hidden -translate-y-full"
				id="mobile-nav"
			>
				<div className=" bg-white">
					<div className="flex justify-between container mx-auto p-4">
						<a href="#" className="text-xl font-bold">
							Golla
							<span className="text-indigo-600"> Pradeep </span>
							Kumar
						</a>
						<button className="md:hidden" onClick={closeNavbar}>
							<Icon name="x" className="w-6 h-6" />
						</button>
					</div>
				</div>
				<nav className="flex flex-col justify-between items-center">
					<a
						href="#services"
						className="text-white hover:text-gray-300 pt-6"
					>
						Services
					</a>
					<a
						href="#about"
						className="text-white hover:text-gray-300 pt-6"
					>
						About
					</a>
					<a
						href="#projects"
						className="text-white hover:text-gray-300 pt-6"
					>
						Projects
					</a>
					{/* TODO: If possible add Testimonials later */}
					<a
						href="#timeline"
						className="text-white hover:text-gray-300 pt-6 "
					>
						Timeline
					</a>
					<a
						href="#skills"
						className="text-white hover:text-gray-300 pt-6"
					>
						Skills
					</a>

					<a
						href="#contact"
						className=" bg-indigo-600 text-white px-6 py-6 rounded-full hover:bg-indigo-700 transition-colors"
					>
						Contact
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;

