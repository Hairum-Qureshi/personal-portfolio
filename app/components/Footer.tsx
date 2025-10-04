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
				<Link href="https://x.com/personal_hq">
					<FaXTwitter />
				</Link>
				<Link href="https://www.linkedin.com/in/hairum-qureshi/">
					<FaLinkedin />
				</Link>
				<Link href="https://github.com/hairum-qureshi">
					<FaGithub />
				</Link>
				<Link href="https://instagram.com/personal_hq">
					<FaInstagram />
				</Link>
			</div>
		</div>
	);
}
