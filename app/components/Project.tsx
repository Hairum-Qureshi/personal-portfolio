import Link from "next/link";
import Image from "next/image";
import { Project as ProjectInterface } from "../interfaces";
import { FaNodeJs, FaReact, FaHtml5 } from "react-icons/fa";
import {
	SiMongodb,
	SiVercel,
	SiExpress,
	SiTailwindcss,
	SiTypescript,
	SiFirebase,
	SiVite
} from "react-icons/si";

import { PiFileJs } from "react-icons/pi";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { JSX } from "react";

const toolIcons: Record<string, JSX.Element> = {
	Node_JS: <FaNodeJs className="text-green-600" />,
	React_JS: <FaReact className="text-sky-400" />,
	MongoDB: <SiMongodb className="text-green-500" />,
	Vercel: <SiVercel className="text-black dark:text-white" />,
	Express_JS: <SiExpress className="text-gray-300" />,
	TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
	TypeScript: <SiTypescript className="text-blue-600" />,
	JavaScript: <IoLogoJavascript className="text-yellow-400" />,
	EJS: <PiFileJs className="text-yellow-500" />,
	CSS: <IoLogoCss3 className="text-blue-500" />,
	Firebase: <SiFirebase className="text-yellow-500" />,
	HTML: <FaHtml5 className="text-orange-500" />,
	Vite: <SiVite className="text-purple-400" />
};

export default function Project({ project }: { project: ProjectInterface }) {
	return (
		<div className="border border-sky-800 my-3 p-4 rounded-lg shadow-md text-white">
			<h2 className="text-xl text-sky-500 font-semibold mb-2 bg-gray-900 px-3 py-1 border border-cyan-900 rounded-md w-full">
				{project.project_title}
			</h2>
			<Image
				src={project.project_image}
				alt={project.project_title}
				width={300}
				height={300}
				className="w-full h-50 rounded-md border border-cyan-900 mb-3 object-cover"
			/>
			<p className="mb-3 text-gray-300">{project.project_description}</p>

			<div className="flex items-center justify-center">
				<Link
					href={project.project_link}
					target="_blank"
					className="text-green-500 border border-green-600 px-3 py-1 rounded-md"
				>
					View Project
				</Link>
				<Link
					href={project.project_read_more_link}
					className="text-sky-500 ml-2 border border-sky-600 px-3 py-1 rounded-md"
				>
					Read more
				</Link>
				<Link
					href={project.project_github_link || "#"}
					target="_blank"
					className="text-purple-500 ml-2 border border-purple-600 px-3 py-0.5 rounded-md"
				>
					GitHub Repo
				</Link>
			</div>
			<div className="flex flex-wrap gap-3 mt-4 items-center justify-center">
				{project.project_tools.map((tool: string, idx: number) => (
					<div
						key={idx}
						className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 border border-gray-700 shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] transition-shadow duration-200"
						title={tool}
					>
						{toolIcons[tool] ? (
							<span className="text-2xl drop-shadow-md">{toolIcons[tool]}</span>
						) : (
							<span className="text-gray-400 text-sm">{tool}</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
