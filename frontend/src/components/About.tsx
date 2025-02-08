import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";
import changeUrlDynamically from "../utils/dynamicUrl";
const About = () => {
	const sectionRef = useRef(null);
	useEffect(() => {
		changeUrlDynamically(sectionRef, "about", true);
		return () => {
			changeUrlDynamically(sectionRef, "about", false);
		};
	});
	return (
		<section ref={sectionRef} id="about" className="py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center gap-12">
					<motion.div
						className="md:hidden lg:block lg:w-1/2 relative"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl"></div>
						<img
							src="/me.webp"
							alt="About me"
							className="rounded-2xl w-full relative z-10 sm:w-3/4 md:w-full"
						/>
					</motion.div>

					<motion.div
						className="lg:w-1/2"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold mb-6">About Me</h2>
						<p className="text-gray-600 mb-6">
							I &apos; m Golla Pradeep Kumar, a{" "}
							<span className="text-indigo-600 font-bold">
								MERN stack developer and AWS enthusiast
							</span>{" "}
							passionate about building scalable and user-friendly
							web applications. With expertise in{" "}
							<span className="text-indigo-600 font-bold">
								React, Node.js, and cloud computing,
							</span>{" "}
							I craft seamless digital experiences that solve
							real-world problems. My strong foundation in{" "}
							<span className="text-indigo-600 font-bold">
								Data Structures & Algorithms (DSA)
							</span>{" "}
							helps me write efficient and optimized code, making
							applications faster and more reliable.
						</p>
						<p className="text-gray-600 mb-8">
							Beyond development, I love exploring{" "}
							<span className="text-indigo-600 font-bold">
								DevOps, cloud infrastructure, and open-source
								contributions.
							</span>{" "}
							I actively participate in{" "}
							<span className="text-indigo-600 font-bold">
								Hacktoberfest
							</span>{" "}
							and collaborate on GitHub to improve projects and
							share knowledge. Whether it's deploying
							applications, optimizing performance, or solving
							complex challenges, I'm always eager to learn and
							push the boundaries of web development. 🚀
						</p>
						<a
							href="https://drive.google.com/file/d/1JNnLfwwdU5mZMJ4CPPqNl09kwmYHICGG/view?usp=sharing"
							className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 w-fit"
							target="_blank"
						>
							<Icon name="download" className="w-5 h-5" />
							Download CV
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;

