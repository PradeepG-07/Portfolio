import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { motion } from "framer-motion";
import changeUrlDynamically from "../utils/dynamicUrl";
const services = [
	{
		icon: <Icon name="code" className="w-8 h-8 text-indigo-600" />,
		title: "Full-Stack Web Development",
		description:
			"I build scalable web applications using MERN Stack (MongoDB, Express.js, React, Node.js).I create responsive, user-friendly interfaces with React, Tailwind CSS, and Bootstrap.",
	},
	{
		icon: <Icon name="cloud" className="w-8 h-8 text-indigo-600" />,
		title: "Cloud & DevOps",
		description:
			"I deploy and manage applications on AWS services like EC2, S3, Lambda, and RDS. I automate workflows using CI/CD pipelines with GitHub Actions and Docker.",
	},
	{
		icon: <Icon name="brain" className="w-8 h-8 text-indigo-600" />,
		title: "Problem-Solving & DSA ",
		description:
			"I have a strong foundation in Data Structures & Algorithms. I write efficient and optimized code to solve complex computational problems.",
	},
	{
		icon: <Icon name="database" className="w-8 h-8 text-indigo-600" />,
		title: "Backend & Database Management",
		description:
			"I develop secure and scalable REST APIs, Websockets, WebRTC using Node.js & Express.js. I work with MongoDB and SQL databases to ensure efficient data management.",
	},
	{
		icon: <Icon name="git-branch" className="w-8 h-8 text-indigo-600" />,
		title: "Open Source & Collaboration",
		description:
			"I actively contribute to open-source projects, including Hacktoberfest and GitHub repositories. I follow best practices in Git, GitHub, and team collaboration for seamless development.",
	},
];

const Services = () => {
	const sectionRef = useRef(null);
	useEffect(() => {
		changeUrlDynamically(sectionRef, "services", true);
		return () => {
			changeUrlDynamically(sectionRef, "services", false);
		};
	});
	return (
		<section ref={sectionRef} id="services" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl font-bold mb-4"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					My Expertise
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group"
							initial={{
								opacity: 0,
								y: index % 2 === 0 ? -50 : 50, // Alternate direction based on index
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.2, // Stagger the animations
							}}
						>
							<div className="mb-4 transform group-hover:scale-110 transition-transform">
								{service.icon}
							</div>
							<h3 className="text-xl font-semibold mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

