import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export default function Home() {
	return (
		<div className="lg:mx-0 mx-5">
			<div className="mt-3">
				<h2 className="font-semibold text-3xl lg:px-0 px-3">Hello, I&apos;m</h2>
				<h1 className="font-semibold text-yellow-500 lg:text-8xl text-7xl lg:p-0 px-3">
					Hairum Qureshi
				</h1>
				<div className="py-8">
					<h3 className="mb-4 text-white text-xl font-bold tracking-tight">
						Quick Facts:
					</h3>
					<div className="w-full lg:flex space-x-4 lg:flex-row flex flex-col lg:space-y-0 space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<FaUser className="text-2xl text-white/70" />
									<span className="text-4xl font-extrabold text-sky-400">
										{new Date().getFullYear() - 2004}
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Age
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<FaLaptopCode className="text-3xl text-white/70" />
									<span className="text-4xl font-extrabold text-sky-400">
										{new Date().getFullYear() - 2019}
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									years coding
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<IoLocation className="text-2xl text-white/70" />
									<span className="text-4xl font-semibold text-sky-400">
										USA
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Delaware
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<SiNextdotjs className="text-2xl text-white/70" />
									<span className="text-4xl font-semibold text-sky-400">
										Next.js
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Currently learning
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="py-4">
					<h3 className="mb-8 text-white text-xl font-bold tracking-tight">
						Core Technologies
					</h3>
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
								<GrGithub className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								GitHub
							</span>
						</div>
					</div>
				</div>
				<div className="py-4">
					<h3 className="mb-8 text-white text-xl font-bold tracking-tight">
						Currently Exploring
					</h3>
					<div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-4xl mx-auto">
						<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
							<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
								<SiNextdotjs className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								Next.js
							</span>
						</div>
						<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
							<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
								<FaDocker className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								Docker
							</span>
						</div>
						<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
							<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
								<SiPrisma className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								Prisma
							</span>
						</div>
						<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
							<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
								<RiSupabaseFill className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								Supabase
							</span>
						</div>
						<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
							<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
								<SiFirebase className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
							</div>
							<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
								Firebase
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
					</div>
				</div>
			</div>
		</div>
	);
}
