"use client";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="text-white w-full p-2 mt-4">
			<div className="flex text-lg justify-around text-gray-400">
				<Link href="/" className="font-semibold">
					Home
				</Link>
				<Link href="/">About</Link>
				<Link href="/">Project Showcase</Link>
				<Link href="/">Contact</Link>
			</div>
		</nav>
	);
}
