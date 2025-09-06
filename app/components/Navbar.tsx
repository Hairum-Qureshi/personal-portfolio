"use client";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="text-white w-full p-2 mt-4">
			<div className="flex text-lg justify-around text-gray-400">
				<Link
					href="/"
					className="font-semibold hover:text-gray-300 hover:cursor-pointer"
				>
					Home
				</Link>
				<Link
					href="/about"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					About
				</Link>
				<Link
					href="/project-showcase"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					Project Showcase
				</Link>
				<Link
					href="/contact"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					Contact
				</Link>
				<Link
					href="/all-blogs"
					className="hover:text-gray-300 hover:cursor-pointer"
				>
					Blog
				</Link>
			</div>
		</nav>
	);
}
