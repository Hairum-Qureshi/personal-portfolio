import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="text-gray-400 flex w-full mt-4">
			© {new Date().getFullYear()} Hairum Qureshi
			<div className="ml-auto flex items-center space-x-3 text-xl">
				<Link
					href="https://x.com/personal_hq"
					className="hover:text-sky-400 hover:drop-shadow-[0_0_6px_#38bdf8] transition duration-300"
				>
					<FaXTwitter />
				</Link>
				<Link
					href="https://www.linkedin.com/in/hairum-qureshi/"
					className="hover:text-sky-400 hover:drop-shadow-[0_0_6px_#38bdf8] transition duration-300"
				>
					<FaLinkedin />
				</Link>
				<Link
					href="https://github.com/hairum-qureshi"
					className="hover:text-purple-400 hover:drop-shadow-[0_0_6px_#a855f7] transition duration-300"
				>
					<FaGithub />
				</Link>
				<Link
					href="https://instagram.com/hq_personal"
					className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_6px_#e879f9] transition duration-300"
				>
					<FaInstagram />
				</Link>
			</div>
		</div>
	);
}
