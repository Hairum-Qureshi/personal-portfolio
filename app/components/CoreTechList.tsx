import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
	SiExpress,
	SiMongodb,
	SiNestjs,
	SiTypescript,
	SiVite
} from "react-icons/si";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

export default function CoreTechList() {
	return (
		<div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-4xl mx-auto">
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<SiMongodb className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					MongoDB
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<TbBrandSocketIo className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Socket.io
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<SiExpress className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Express.js
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<RiReactjsFill className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					React.js
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<FaNodeJs className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Node.js
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<RiTailwindCssFill className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					TailwindCSS
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<SiTypescript className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					TypeScript
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<SiNestjs className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Nest.js
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<GrGithub className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					GitHub
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<FaGitAlt className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Git
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<SiVite className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Vite
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<FaHtml5 className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					HTML
				</span>
			</div>
		</div>
	);
}
