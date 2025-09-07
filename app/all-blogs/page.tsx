"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import Blog from "../components/Blog";

export default function Blogs() {
	return (
		<div>
			<div className="flex">
				<div>
					<h1 className="text-2xl font-semibold">All Blogs</h1>
				</div>
				<div className="flex items-center justify-center ml-auto">
					<Link
						href="/new-blog"
						className="flex items-center justify-center text-green-500 hover:cursor-pointer px-3 py-1 border border-green-600 rounded-md"
					>
						<FaPlus />
						&nbsp;New Blog
					</Link>
				</div>
			</div>
			<div className="flex-col my-5">
				<Blog />
				<Blog />
			</div>
		</div>
	);
}
