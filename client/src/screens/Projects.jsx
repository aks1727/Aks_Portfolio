import React, { useState } from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Button,
	SimpleGrid,
	Kbd,
	Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const projects = {
	webProjects: [
		{
			name: "Consultancy Service Platform",
			githubRepo:
				"ConsultancyService",
			websiteLink: "https://consultancy-service-platform.vercel.app/",
			description:
				"A platform enabling users to connect with top mentors for personalized guidance and knowledge-sharing.",
			keyFeatures: ["Chat communication", "Notifications", "Mentor search"],
			technologies: {
				stack: "MERN Stack",
				ui: "Chakra UI",
				additional: "Web sockets",
			},
			imgLink: "./assets/img/project/Web/consultancy.png",
		},
		{
			name: "Music Player Platform",
			githubRepo: "React-Music-player",
			websiteLink: "https://vaiaksh-music.vercel.app/",
			description:
				"An interactive music player platform supporting emerging artists with seamless music playback and upload functionality.",
			keyFeatures: ["Playback controls", "Responsive design", "Audio streaming"],
			technologies: {
				stack: "MERN Stack",
				ui: "Chakra UI",
			},
			imgLink: "./assets/img/project/Web/musicPlayer.jpeg",
		},
	],
	automationProjects: [
		{
			name: "Swag Labs Automation",
			githubRepo: "SwagLabsAutomation",
			websiteLink: null,
			description:
				"An automation testing framework for Swag Labs e-commerce app to validate login, product selection, cart, and checkout workflows.",
			keyFeatures: [
				"Data-driven testing",
				"Reusable Page Object Model (POM)",
				"Cross-browser execution",
				"Detailed reporting",
			],
			technologies: {
				stack: "Java, Selenium WebDriver, TestNG, Maven",
				ui: "Extent Reports",
				additional: "Apache POI, Cucumber (BDD)",
			},
			imgLink: "./assets/img/project/Automation/swaglabs.jpeg",
		},
	],
	mobileProjects: [
		{
			name: "Currency Converter",
			githubRepo:
				"ReactNativePractice/tree/main/CurrencyConverter",
			websiteLink: null,
			description:
				"A mobile application for converting currencies in real-time using up-to-date exchange rates.",
			keyFeatures: ["Real-time updates", "Intuitive UI", "Offline access"],
			technologies: {
				stack: "React Native",
				ui: "Custom components",
				additional: "Optional API calls",
			},
			imgLink: "./assets/img/project/Mobile/currenyConverter.jpeg",
		},
	],
	mlProjects: [
		{
			name: "Employee Burnout Prediction",
			githubRepo:
				"Employee_Burnot_Prediction_Project",
			websiteLink: null,
			description:
				"A machine learning project aimed at predicting employee burnout by analyzing work patterns, behavior data, and other related factors.",
			keyFeatures: ["Preprocessing", "Feature Engineering", "Training", "Evaluation"],
			technologies: {
				stack: "Python, scikit-learn, pandas, NumPy",
				ui: "Jupyter Notebook",
				additional: "TensorFlow integration",
			},
			imgLink: "./assets/img/project/ML/employeeburnoutPrediction.jpeg",
		},
	],
};

function Projects() {
	const [activeCategory, setActiveCategory] = useState("webProjects");

	const categories = [
		{ label: "Web Projects", key: "webProjects" },
		{ label: "Automation Projects", key: "automationProjects" },
		{ label: "Mobile Projects", key: "mobileProjects" },
		{ label: "ML Projects", key: "mlProjects" },
	];

	return (
		<Flex
			p={8}
			bg={"#011940"}
			alignItems={"center"}
			justifyContent={"center"}
			flexDirection={"column"}
			px={[5, 10, 20]}
			py={"3rem"}
		>
			<Heading mb={6} size={{ base: "md", md: "lg", lg: "xl" }}>
				Projects
			</Heading>

			{/* Category Buttons */}
			<Flex gap={4} mb={8} wrap="wrap" justify="center">
				{categories.map((cat) => (
					<Button
						key={cat.key}
						colorScheme={activeCategory === cat.key ? "teal" : "white"}
						onClick={() => setActiveCategory(cat.key)}
						variant={activeCategory === cat.key ? "solid" : "outline"}
						transition="0.3s"
					>
						{cat.label}
					</Button>
				))}
			</Flex>

			{/* Animated Project Section */}
			<AnimatePresence mode="wait">
				<MotionBox
					key={activeCategory}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.4 }}
					width="100%"
				>
					<SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={6}>
						{projects[activeCategory].map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</SimpleGrid>
				</MotionBox>
			</AnimatePresence>
		</Flex>
	);
}

function ProjectCard({ project }) {
	return (
		<Box
			p={4}
			m={2}
			border="1px solid"
			borderColor="gray.200"
			borderRadius="md"
			boxShadow="sm"
			_hover={{ boxShadow: "lg" }}
			display="flex"
			flexDirection="column"
			bgGradient="linear(to-r, teal.50, blue.50)"
			justifyContent="space-between"
		>
			{/* Image */}
			{project.imgLink && (
				<Box mb={4} bg="gray.100" borderRadius="md" display="flex" alignItems="center" justifyContent="center">
					<Image src={project.imgLink} borderRadius="md" />
				</Box>
			)}

			{/* Title */}
			<Heading size="md" mb={2} textAlign="center" color="teal.800" fontWeight="semibold">
				{project.name}
			</Heading>

			{/* Description */}
			<Text fontSize="sm" mb={4} textAlign="justify" color="gray.700" flexGrow={1}>
				{project.description}
			</Text>

			{/* Key Features */}
			<Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
				<Text fontSize="sm" fontWeight="bold" mb={1} color="teal.600">
					Key Features:&nbsp;
				</Text>
				{project.keyFeatures.map((feature, index) => (
					<Kbd key={index} bg={"orange.500"} p={2} mr={1}>
						{feature}
					</Kbd>
				))}
			</Box>

			{/* Technologies */}
			<Box mb={3} display="flex" alignItems="center" flexWrap="wrap">
				<Text fontSize="sm" fontWeight="bold" mb={1} color="teal.600">
					Technologies:&nbsp;
				</Text>
				<Text color="gray.600" fontSize="sm">
					{project.technologies.stack}, {project.technologies.ui}
					{project.technologies.additional && `, ${project.technologies.additional}`}
				</Text>
			</Box>

			{/* Links */}
			<Flex justify="center" gap={3} mt="auto">
				{project.websiteLink && (
					<Button as="a" href={project.websiteLink} target="_blank" colorScheme="green" size="sm">
						Live Demo
					</Button>
				)}
				{project.githubRepo && (
					<Button as="a" href={"https://github.com/aks1727/"+project.githubRepo} target="_blank" colorScheme="blue" size="sm">
						GitHub
					</Button>
				)}
			</Flex>
		</Box>
	);
}

export default Projects;
