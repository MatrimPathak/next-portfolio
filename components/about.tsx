"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After earning a degree in{" "}
				<span className="font-medium">Computer Science</span>, I decided
				to pursue my passion for web development. I built{" "}
				<span className="font-medium">full-stack projects</span> using{" "}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				.{" "}
				<span className="italic">My favorite part of programming</span>{" "}
				is the problem-solving aspect. I{" "}
				<span className="underline">love</span> the moment when a
				solution clicks. I’m also familiar with TypeScript and Prisma
				and always eager to learn new technologies. I’m currently
				seeking a{" "}
				<span className="font-medium">full-time position</span> as a
				software developer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy
				playing video games, watching movies, and spending time with my
				cat. I also enjoy{" "}
				<span className="font-medium">learning new things</span>. I’m
				currently learning about{" "}
				<span className="font-medium">history</span> and how to play the
				guitar.
			</p>
		</motion.section>
	);
}
