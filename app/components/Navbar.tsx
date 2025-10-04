"use client";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="text-white w-full p-2 mt-4">
			<div className="flex text-base justify-around text-gray-400 border border-slate-800 rounded-md p-1">
				<Link
					href="/"
					className="font-semibold hover:text-gray-300 hover:cursor-pointer"
				>
					HAIRUM QURESHI
				</Link>
				<Link
					href="/about"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					ABOUT
				</Link>
				<Link
					href="/project-showcase"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					PROJECT SHOWCASE
				</Link>
				<Link
					href="/all-blogs"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					BLOG
				</Link>
				<Link
					href="/contact"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					CONTACT
				</Link>
			</div>
		</nav>
	);
}
