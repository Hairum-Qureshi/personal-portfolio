"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Blogs() {
	return (
		<div className="flex">
			<div>
				<h1 className="text-2xl font-semibold">All Blogs</h1>
			</div>
			<div className="flex items-center justify-center ml-auto">
				<Link
					href="/new-blog"
					className="flex items-center justify-center text-green-500 hover:cursor-pointer p-2 border border-green-400 rounded-md"
				>
					<FaPlus />
				</Link>
			</div>
		</div>
	);
}
