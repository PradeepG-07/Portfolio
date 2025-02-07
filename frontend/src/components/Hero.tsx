import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";
import changeUrlDynamically from "../utils/dynamicUrl";
const Hero = () => {
	const sectionRef = useRef(null);
	useEffect(() => {
		changeUrlDynamically(sectionRef, "", true);
		return () => {
			changeUrlDynamically(sectionRef, "", false);
		};
	});
	return (
		<section ref={sectionRef} className="pt-20 pb-20 md:pt-44">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<motion.div
						className="sm:2/3 lg:w-3/5"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-indigo-600 font-medium mb-4">
							Hey I am Pradeep
						</p>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
							I create{" "}
							<span className="text-indigo-600">MERN</span> stack
							applications
							<br />
							and <span className="text-indigo-600">deploy </span>
							them.
						</h1>
						<p className="text-gray-600 mb-8 text-lg">
							Beyond development, I love exploring{" "}
							<span className="text-indigo-600 font-bold">
								DevOps, contributing to open-source,
								cybersecurity,&nbsp;
							</span>
							and staying ahead in tech trends. This keeps it
							tech-focused but adds depth beyond just coding.
						</p>
						<div className="flex gap-4">
							<button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2">
								<Icon
									name="message-circle"
									className="w-5 h-5"
								/>
								Let's Talk
							</button>
						</div>
					</motion.div>

					<motion.div
						className="sm:1/3 lg:w-2/5 relative"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
						<img
							src="/me.webp"
							alt="Profile"
							className="relative z-10 rounded-2xl w-full sm:w-3/4 md:w-full md:hidden lg:block mx-auto"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

