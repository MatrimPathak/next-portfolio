import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio from "@/public/portfolio.png";
import carePulse from "@/public/carePulse.png";
import flowboard from "@/public/flowboard.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Bachelor's in Computer Science and Engineering",
		location: "Kolkata, India",
		description:
			"I completed my Bachelor’s in Computer Science and Engineering from Brainware Group of Institutions in June 2022.",
		icon: React.createElement(LuGraduationCap),
		date: "Aug 2018 - Jun 2022",
	},
	{
		title: "Master's in Computer Science and Engineering with Specialization in Artificial Intelligence and Machine Learning",
		location: "Vellore, India",
		description:
			"I graduated with a Master’s in Computer Science and Engineering, specializing in AI/ML, from VIT in July 2024.",
		icon: React.createElement(LuGraduationCap),
		date: "Sept 2022 - Jul 2024",
	},
	{
		title: "Graduate Intern",
		location: "Bengaluru, India",
		description:
			"I worked as a graduate intern at RSA Security, where I developed a full-stack web application using Next.js, TailwindCSS, and MongoDB. I also collaborated with teams to resolve customer escalations and improve client satisfaction. This experience helped me strengthen both front-end and back-end development skills.",
		icon: React.createElement(CgWorkAlt),
		date: "Aug 2023 - Jul 2024",
	},
] as const;

export const projectsData = [
	{
		title: "Personal Portfolio Website",
		description:
			"Developed a personal portfolio website with stunning animations, dynamic Firebase data display, and a contact form enabling user replies.",
		tags: ["React", "Next.js", "Firebase", "TailwindCSS", "Framer Motion"],
		imageUrl: portfolio,
	},
	{
		title: "FlowBoard",
		description:
			"Developed FlowBoard, a project management app with search, team pages, light/dark mode, and real-time data visualization, using Next.js, Redux, AWS, and PostgreSQL.",
		tags: [
			"Next.js",
			"Redux",
			"TailwindCSS",
			"AWS",
			"PostgreSQL",
			"Recharts",
		],
		imageUrl: flowboard,
	},
	{
		title: "CarePulse",
		description:
			"Developed CarePulse, a healthcare management system for doctor appointments with SMS notifications, admin panel, and advanced UI using Next.js, TypeScript, and TailwindCSS.",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"TailwindCSS",
			"React Hook Form",
			"Appwrite",
			"Twilio",
			"Sentry",
		],
		imageUrl: carePulse,
	},
] as const;

export const skillsData = [
	"React",
	"Next.js",
	"Node.js",
	"Redux",
	"TailwindCSS",
	"TypeScript",
	"JavaScript",
	"MongoDB",
	"PostgreSQL",
	"AWS (EC2, RDS, S3, Cognito)",
	"Prisma",
	"Git",
	"Framer Motion",
	"Redux Toolkit Query",
	"Express.js",
	"Material-UI",
	"React Hook Form",
	"Zod",
	"Firebase",
	"Sentry",
] as const;
