import { FaUser, FaGraduationCap } from "react-icons/fa6";
import CoreTechList from "./components/CoreTechList";
import { GiBrain } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import CurrentlyExploringTechList from "./components/CurrentlyExploringTechList";
import liveStatus from "../public/assets/live-status.gif";
import Image from "next/image";

export default function Home() {
	return (
		<div className="lg:mx-0 mx-5">
			<div className="mt-3">
				<h2 className="text-3xl lg:px-0 px-3">Hello, I&apos;m</h2>
				<h1 className="font-semibold text-indigo-500 lg:text-8xl text-8xl lg:p-0 px-3 drop-shadow-[0_0_40px_rgba(155,93,229,0.9)]">
					Hairum Qureshi
				</h1>
				<h3 className="text-xl mt-1">
					An emerging full-stack software engineer focused on clean, intuitive
					design
				</h3>
				<h4 className="flex items-center text-green-400">
					<Image
						src={liveStatus}
						alt="Animated green status bubble"
						className="w-11 h-14 -ml-4"
					/>
					Currently seeking positions
				</h4>
				<div className="py-8">
					<h3 className="mb-4 text-white text-xl font-bold tracking-tight">
						Quick Facts:
					</h3>
					<div className="w-full lg:flex space-x-4 lg:flex-row flex flex-col lg:space-y-0 space-y-4">
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<FaUser className="text-2xl text-white/70" />
									<span className="text-4xl font-extrabold text-yellow-500">
										{new Date().getFullYear() - 2004}
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Years old
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<FaGraduationCap className="text-3xl text-white/70" />
									<span className="text-4xl font-extrabold text-yellow-500">
										May 2026
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Graduation date
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<IoLocation className="text-2xl text-white/70" />
									<span className="text-4xl font-semibold text-yellow-500">
										{/* <span className="text-red-500">U</span>
										<span className="text-white">S</span>
										<span className="text-sky-500">A</span> */}
										USA
									</span>
								</div>
								<span className="text-sm font-medium text-gray-300/80 mt-[-5px]">
									Newark, Delaware
								</span>
							</div>
						</div>
						<div className="p-4 rounded-xl border border-white/10 bg-gray-900/50 transition-colors duration-300 hover:border-sky-500/50 lg:w-1/4 w-full">
							<div className="flex flex-col items-start space-y-1">
								<div className="flex items-center space-x-2">
									<GiBrain className="text-2xl text-white/70" />
									<span className="text-4xl font-semibold text-sky-500">
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
					<CoreTechList />
				</div>
				<div className="py-4">
					<h3 className="mb-8 text-white text-xl font-bold tracking-tight">
						Currently Exploring
					</h3>
					<CurrentlyExploringTechList />
				</div>
			</div>
		</div>
	);
}
