import { FaDocker } from "react-icons/fa6";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiFirebase } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { FaStripeS } from "react-icons/fa";

export default function CurrentlyExploringTechList() {
	return (
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
					<FaPython className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Python
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<DiRedis className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Redis DB
				</span>
			</div>
			<div className="group flex flex-col items-center p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 rounded-lg">
				<div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-900/50 shadow-lg ring-1 ring-white/10 group-hover:ring-sky-500/50">
					<FaStripeS className="text-3xl text-gray-400 group-hover:text-sky-400 transition-colors duration-300" />
				</div>
				<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
					Stripe
				</span>
			</div>
		</div>
	);
}
