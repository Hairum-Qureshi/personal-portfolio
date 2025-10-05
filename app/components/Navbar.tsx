"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
	const [openedMenu, setOpenedMenu] = useState(false);

	return (
		<nav className="text-white w-full lg:p-2 lg:mt-4">
			<div className="flex text-base justify-around text-gray-400 border border-slate-800 rounded-md p-1 hidden lg:block space-x-6 flex text-center">
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
					PROJECTS SHOWCASE
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
			<div className="block lg:hidden relative">
				<div className="text-white bg-slate-950 flex items-center justify-end p-4">
					<GiHamburgerMenu
						className="text-2xl cursor-pointer"
						onClick={() => setOpenedMenu(!openedMenu)}
					/>
				</div>
				{openedMenu && (
					<div className="absolute w-full z-10">
						<div className="flex flex-col bg-gradient-to-br from-slate-950 to-sky-950 via-slate-950 space-y-3 p-3 border-b border-b-sky-500 drop-shadow-[0_8px_8px_rgba(14,165,233,0.7)]">
							<Link
								href="/"
								className="font-semibold hover:text-gray-300 hover:cursor-pointer"
								onClick={() => setOpenedMenu(false)}
							>
								HAIRUM QURESHI
							</Link>
							<Link
								href="/about"
								className="hover:text-gray-300 hover:cursor-pointer"
								onClick={() => setOpenedMenu(false)}
							>
								ABOUT
							</Link>
							<Link
								href="/project-showcase"
								className="hover:text-gray-300 hover:cursor-pointer"
								onClick={() => setOpenedMenu(false)}
							>
								PROJECTS SHOWCASE
							</Link>
							<Link
								href="/all-blogs"
								className="hover:text-gray-300 hover:cursor-pointer"
								onClick={() => setOpenedMenu(false)}
							>
								BLOG
							</Link>
							<Link
								href="/contact"
								className="hover:text-gray-300 hover:cursor-pointer"
								onClick={() => setOpenedMenu(false)}
							>
								CONTACT
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
