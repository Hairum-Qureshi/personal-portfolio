"use client";

import { use } from "react"; // note: it's not 'React.use', it's imported from react
import { useEffect, useState } from "react";
import projects from "../../../../public/data/projects.json";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Page({
	params
}: {
	params: Promise<{ "project-name": string }>;
}) {
	const resolvedParams = use(params);
	const projectName = resolvedParams["project-name"];

	const [projectIndex, setProjectIndex] = useState(-1);

	useEffect(() => {
		const index = projects.findIndex(
			project =>
				project.project_title.toLowerCase().replace(/\s+/g, "-") === projectName
		);
		setProjectIndex(index);
	}, [projectName]);

	if (projectIndex === -1) return <div>Loading...</div>;

	return (
		<div>
			<div className="w-full h-70 relative mt-4">
				<Image
					src={projects[projectIndex].project_landscape_image}
					alt={projects[projectIndex].project_title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="mt-5 w-full lg:m-auto text-lg px-5 lg:p-0 prose prose-invert break-words">
				<ReactMarkdown>{projects[projectIndex].project_about}</ReactMarkdown>
			</div>
		</div>
	);
}
